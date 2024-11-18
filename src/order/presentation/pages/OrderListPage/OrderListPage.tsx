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

  const handleGoToOrderPage = (order: Order) => {
    navigate(`/orders/${order.id}`);
  }

  return (
    <div className="container py-3">
      <h2>Meus de pedidos</h2>
      <ul className="list-group">
        <Each data={orders} render={order => (
          <li
            className="list-group-item list-group-item-action d-flex gap-2"
            onClick={() => handleGoToOrderPage(order)}
          >
            <StyledOrderListPageGallery>
              <Each data={order.items} render={item => {
                const product = products.find(p => p.id === item.product_id);
                return <img src={product?.picture} alt={product?.name}/>
              }}/>
            </StyledOrderListPageGallery>
            <div className="d-flex flex-column">
              <h6 className="m-0">{statuses[order.status]}</h6>
              <ul>
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
  )
}

export default OrderListPage;