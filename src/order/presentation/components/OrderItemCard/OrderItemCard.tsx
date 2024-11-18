// Types
import type {OrderItemCardProps} from "./OrderItemCard.types.ts";

// Mocks
import products from "@modules/product/data/mocks/products.ts";

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
  const product = products.find(p => p.id === data.product_id);

  return (
    <StyledOrderItemCard {...rest}>
      <StyledOrderItemCardPicture src={product?.picture}/>
      <StyledOrderItemCardName to={`/products/${product?.id}`} children={product?.name}/>
      <StyledOrderItemCardPrice children={formatCurrency(data.price)}/>
      <StyledOrderItemCardQuantity children={`Qtd: ${data.quantity}`}/>
    </StyledOrderItemCard>
  )
}

export default OrderItemCard;