import {useLocalStorage} from "usehooks-ts";
import {useNavigate} from "react-router-dom";

// Types
import type {Order} from "@modules/order/types";

// Mocks
import products from "@modules/product/data/mocks/products.ts";

// Components
import Each from "@common/presentation/components/atoms/Each";

// Styled components
import {StyledOrderListPageGallery} from "./OrderListPage.styles";

const OrderListPage = () => {
  const [orders] = useLocalStorage<Order[]>('orders', [])
  const navigate = useNavigate();
  const statuses = {
    pending: "Pendente",
    preparing: "Em preparo",
    transport: "Em transporte",
    concluded: "Concluído",
    canceled: "Cancelado",
  }

  const activeOrders = orders.filter(order => (
    order.status !== "canceled" && order.status !== "concluded"
  ))

  const historyOrders = orders.filter(order => (
    order.status === "canceled" || order.status === "concluded"
  ))

  const handleGoToOrderPage = (order: Order) => {
    navigate(`/orders/${order.id}`);
  }

  return (
    <div className="container py-3 d-flex flex-column gap-3">
      {activeOrders.length > 0 && (
        <div className="d-flex flex-column">
          <h4>Pedidos ativos</h4>
          <ul className="list-group">
            <Each data={activeOrders} render={order => (
              <li className="list-group-item list-group-item-action d-flex gap-3" onClick={() => handleGoToOrderPage(order)}>
                <StyledOrderListPageGallery>
                  <Each data={order.items} render={item => {
                    const product = products.find(p => p.id === item.product_id);
                    return <img src={product?.picture} alt={product?.name}/>
                  }}/>
                </StyledOrderListPageGallery>
                <div className="d-flex flex-column gap-1">
                  <h6 className="m-0">{statuses[order.status]}</h6>
                  <ul className="ps-3">
                    <Each data={order.items} render={item => {
                      const product = products.find(p => p.id === item.product_id);
                      return <li>{product?.name}</li>
                    }}/>
                  </ul>
                </div>
              </li>
            )}/>
          </ul>
        </div>
      )}

      {historyOrders.length > 0 && (
        <div className="d-flex flex-column">
          <h4>Histórico</h4>
          <ul className="list-group">
            <Each data={historyOrders} render={order => (
              <li className="list-group-item list-group-item-action d-flex gap-3" onClick={() => handleGoToOrderPage(order)}>
                <StyledOrderListPageGallery>
                  <Each data={order.items} render={item => {
                    const product = products.find(p => p.id === item.product_id);
                    return <img src={product?.picture} alt={product?.name}/>
                  }}/>
                </StyledOrderListPageGallery>
                <div className="d-flex flex-column gap-1">
                  <h6 className="m-0">{statuses[order.status]}</h6>
                  <ul className="ps-3">
                    <Each data={order.items} render={item => {
                      const product = products.find(p => p.id === item.product_id);
                      return <li>{product?.name}</li>
                    }}/>
                  </ul>
                </div>
              </li>
            )}/>
          </ul>
        </div>
      )}
    </div>
  )
}

export default OrderListPage;