// Types
import {OrderStatusProps} from "./OrderStatus.types";

// Styled components
import {StyledOrderStatus, StyledOrderStatusIcon, StyledOrderStatusItem} from "./OrderStatus.styles";

const OrderStatus = ({status = 'pending', ...rest}: OrderStatusProps) => {
  return (
    <StyledOrderStatus $current={status} {...rest}>
      <StyledOrderStatusItem>
        <StyledOrderStatusIcon className="bi bi-clock" title="Pendente"/>
      </StyledOrderStatusItem>
      <StyledOrderStatusItem>
        <StyledOrderStatusIcon className="bi bi-fire" title="Em preparo"/>
      </StyledOrderStatusItem>
      <StyledOrderStatusItem>
        <StyledOrderStatusIcon className="bi bi-truck" title="Em transporte"/>
      </StyledOrderStatusItem>
      <StyledOrderStatusItem>
        <StyledOrderStatusIcon className="bi bi-check-lg" title="Entregue"/>
      </StyledOrderStatusItem>
    </StyledOrderStatus>
  )
}

export default OrderStatus;