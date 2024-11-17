import {useParams} from "react-router-dom";
import {useLocalStorage} from "usehooks-ts";

// Types
import type {OrderPageParams} from "./OrderPage.types";
import type {Order} from "@modules/order/types";

const OrderPage = () => {
  const {order_id} = useParams<OrderPageParams>();
  const [orders] = useLocalStorage<Order[]>('orders', []);
  const order = orders.find(o => o.id === order_id);

  return Boolean(order) && (
    <div className="container">
      <h1>Tela de pedido</h1>
      {order?.id}
    </div>
  )
}

export default OrderPage;