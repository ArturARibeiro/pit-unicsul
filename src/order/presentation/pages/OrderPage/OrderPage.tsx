import {useEffect, useState} from "react";
import {useLoaderData} from "react-router-dom";

// Types
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
import OrderService from "@modules/order/data/services/OrderService";

const OrderPage = () => {
  const order = useLoaderData() as Order;
  const [currentOrder, setCurrentOrder] = useState<Order>(order);

  const {dispatchNotification} = useNotification();
  const [review, setReview] = useState<string>('');
  const [rate, setRate] = useState<number>(5);

  const statusLabels = {
    pending: 'Pendente',
    preparing: 'Preparando',
    transport: 'Em transporte',
    concluded: 'Concluído',
    canceled: 'Cancelado',
  };

  const updateOrderStatus = (newStatus: Order['status']) => {
    if (!currentOrder) return;

    const validTransitions: Record<string, Order['status'][]> = {
      pending: ["canceled"],
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
    }
  };

  const handleCancelOrder = () => {
    OrderService.cancel(currentOrder.id).then(() => {
      updateOrderStatus("canceled");
    })
  }

  const handleFinishOrder = () => {
    OrderService.finish(currentOrder.id).then(() => {
      updateOrderStatus("concluded");
    })
  }

  const handleRateOrder = () => {
    OrderService.rate(currentOrder.id, rate, review).then(order => {
      setCurrentOrder(order);
    });
  }

  useEffect(() => {
    const onUpdateOrder = ({detail}: {detail: Partial<Order>}) => {
      if (detail.id == currentOrder.id) {
        setCurrentOrder(prev => ({...prev, ...detail}));
      }
    }

    window.addEventListener('sse:order:updated', onUpdateOrder);

    return () => {
      window.removeEventListener('sse:order:updated', onUpdateOrder);
    }
  }, [currentOrder.id]);

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
                  <h6>Valor final</h6>
                  {formatCurrency(currentOrder.items.reduce((a, b) => a + (b.amount ?? 0), 0))}
                </li>
                <li className="list-group-item">
                  <h6>Endereço de entrega</h6>
                  {currentOrder?.address?.mounted}
                </li>
                <li className="list-group-item">
                  <h6>Dados de pagamento</h6>
                  {currentOrder.card.number}
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
