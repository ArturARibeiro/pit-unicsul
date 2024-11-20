import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useLocalStorage} from "usehooks-ts";

// Types
import type {OrderPageParams} from "./OrderPage.types";
import type {Order} from "@modules/order/types";

// Components
import Each from "@common/presentation/components/atoms/Each";
import OrderItemCard from "@modules/order/presentation/components/OrderItemCard";
import OrderStatus from "@modules/order/presentation/components/OrderStatus";
import {formatCurrency} from "@modules/product/domain/utils/money.ts";
import Button from "@common/presentation/components/atoms/Button";
import Textarea from "@common/presentation/components/atoms/Textarea";
import OrderRate from "@modules/order/presentation/components/OrderRate";
import useNotification from "@modules/notification/domain/hooks/useNotification.ts";

const OrderPage = () => {
  const {order_id} = useParams<OrderPageParams>();
  const {dispatchNotification} = useNotification();
  const [orders, setOrders] = useLocalStorage<Order[]>('orders', []);
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);
  const [review, setReview] = useState<string>('');
  const [rate, setRate] = useState<number>(5);

  const statusLabels = {
    pending: 'Pendente',
    preparing: 'Preparando',
    transport: 'Em transporte',
    concluded: 'Concluído',
    canceled: 'Cancelado',
  };

  useEffect(() => {
    const order = orders.find(o => o.id === order_id);
    if (order) {
      setCurrentOrder(order);
    }
  }, [orders, order_id]);

  useEffect(() => {
    if (!currentOrder) return;

    if (currentOrder.status === "pending") {
      const pendingTimeout = setTimeout(() => {
        updateOrderStatus("preparing");
      }, 5000);

      return () => clearTimeout(pendingTimeout);
    }

    if (currentOrder.status === "preparing") {
      const preparingTimeout = setTimeout(() => {
        updateOrderStatus("transport");
      }, 10000);

      return () => clearTimeout(preparingTimeout);
    }
  }, [currentOrder]);

  const updateOrderStatus = (newStatus: Order['status']) => {
    if (!currentOrder) return;

    const validTransitions: Record<string, Order['status'][]> = {
      pending: ["preparing", "canceled"],
      preparing: ["transport"],
      transport: ["concluded"],
    };

    if (validTransitions[currentOrder.status].includes(newStatus)) {
      const updatedOrder = {...currentOrder, status: newStatus};

      if (newStatus === "preparing") {
        dispatchNotification("Seu produto está sendo preparado!")
      }

      if (newStatus === "transport") {
        dispatchNotification("Seu pedido está em transporte!")
      }

      setCurrentOrder(updatedOrder);
      setOrders(prev =>
        prev.map(o => (o.id === currentOrder.id ? updatedOrder : o))
      );
    }
  };

  const handleCancelOrder = () => {
    updateOrderStatus("canceled");
  }

  const handleFinishOrder = () => {
    updateOrderStatus("concluded");
  }

  const handleRateOrder = () => {
    console.log(review, rate);
    setOrders(prev => {
      return [...prev].map(o => {
        if (o.id === order_id) {
          const newOrder = {...o, rate, review};
          setCurrentOrder(newOrder);
          return newOrder;
        }

        return o;
      });
    })
  }

  return currentOrder && (
    <div className="container py-3">
      <div className="row g-3">
        <div className="col-12 col-lg-8">
          <div className="row g-3">
            <div className="col-12">
              <h5>{statusLabels[currentOrder.status]}</h5>
              <ul className="list-group">
                <li className="list-group-item">
                  <OrderStatus status={currentOrder.status}/>
                </li>
              </ul>
            </div>
            <div className="col-12">
              <h5>Dados do pedido</h5>
              <ul className="list-group">
                <li className="list-group-item">
                  Valor total: {formatCurrency(currentOrder.items.reduce((a, b) => a + (b.price * b.quantity), 0))}
                </li>
                <li className="list-group-item">
                  Endereço: {currentOrder.address.address}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-4">
          <div className="row g-3">
            <div className="col-12">
              <h5>Itens</h5>
              <ul className="list-group">
                <Each data={currentOrder.items} render={item => (
                  <OrderItemCard className="list-group-item" data={item}/>
                )}/>
              </ul>
            </div>
            {currentOrder.status === 'pending' && (
              <div className="col-12">
                <Button className="w-100" onClick={handleCancelOrder}>Cancelar Pedido</Button>
              </div>
            )}
            {currentOrder.status === 'transport' && (
              <div className="col-12">
                <Button className="w-100" onClick={handleFinishOrder}>Recebi meu pedido</Button>
              </div>
            )}
            {(currentOrder.status === 'concluded' && !currentOrder.review?.length) && (
              <div className="col-12 d-flex flex-column gap-1">
                <h5 className="m-0">Avalie o seu pedido!</h5>
                <div>
                  <OrderRate onChange={rate => setRate(rate)} />
                </div>
                <Textarea
                  rows={4}
                  className="w-100"
                  placeholder="Deixe um comentário"
                  onChange={e => setReview(e.target.value)}
                  value={review}
                />
                <Button className="w-100" onClick={handleRateOrder}>Avaliar</Button>
              </div>
            )}
            {(currentOrder.status === 'concluded' && currentOrder.review?.length) && (
              <div className="col-12 d-flex flex-column gap-1">
                <h5 className="m-0">Sua avaliação</h5>
                <div className="d-flex flex-column gap-2 p-2">
                  <OrderRate rate={currentOrder.rate} disabled/>
                  <i className="p-1">"{currentOrder.review}"</i>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
