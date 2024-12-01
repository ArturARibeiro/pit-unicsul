// Types
import type {OrderItemCardProps} from "./OrderItemCard.types.ts";

// Utils
import {formatCurrency} from "@modules/product/domain/utils/money.ts";

// Styled components
import {
  StyledOrderItemCard,
  StyledOrderItemCardName,
  StyledOrderItemCardPicture,
  StyledOrderItemCardPrice,
  StyledOrderItemCardQuantity
} from "./OrderItemCard.styles.ts";

const OrderItemCard = ({data, ...rest}: OrderItemCardProps) => {
  return (
    <StyledOrderItemCard {...rest}>
      <StyledOrderItemCardPicture src={data.product.picture}/>
      <StyledOrderItemCardName to={`/products/${data.product.id}`} children={data.product.name}/>
      <StyledOrderItemCardPrice children={formatCurrency(data.amount)}/>
      <StyledOrderItemCardQuantity children={`Qtd: ${data.quantity}`}/>
    </StyledOrderItemCard>
  )
}

export default OrderItemCard;