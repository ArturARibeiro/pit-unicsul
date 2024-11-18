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

const OrderPage = () => {
  const {order_id} = useParams<OrderPageParams>();
  const [orders, setOrders] = useLocalStorage<Order[]>('orders', []);
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);

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
      }, 2000); // 2 segundos

      return () => clearTimeout(pendingTimeout);
    }

    if (currentOrder.status === "preparing") {
      const preparingTimeout = setTimeout(() => {
        updateOrderStatus("transport");
      }, 5000); // 5 segundos

      return () => clearTimeout(preparingTimeout);
    }
  }, [currentOrder]);

  const updateOrderStatus = (newStatus: string) => {
    if (!currentOrder) return;

    // Garantir que o status atual seja o pré-requisito para o novo status
    const validTransitions: Record<string, Order['status']> = {
      pending: "preparing",
      preparing: "transport",
      transport: "concluded",
    };

    if (validTransitions[currentOrder.status] === newStatus) {
      const updatedOrder = {...currentOrder, status: newStatus};
      setCurrentOrder(updatedOrder);
      setOrders(prev =>
        prev.map(o => (o.id === currentOrder.id ? updatedOrder : o))
      );
    }
  };

  const handleFinishOrder = () => {
    updateOrderStatus("concluded");
  }

  return currentOrder && (
    <div className="container py-3">
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
        <div className="col-12">
          <h5>Itens</h5>
          <ul className="list-group">
            <Each data={currentOrder.items} render={item => (
              <OrderItemCard className="list-group-item" data={item}/>
            )}/>
          </ul>
        </div>
        {currentOrder.status === 'transport' && (
          <div className="col-12">
            <Button className="w-100" onClick={handleFinishOrder}>Recebi meu pedido</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderPage;
