// Types
import type {CartItemCardProps} from "./CartItemCard.types";

// Styled components
import {
  StyledCartItemCard,
  StyledCartItemCardCustomizations,
  StyledCartItemCardName,
  StyledCartItemCardPicture,
  StyledCartItemCardPrice,
  StyledCartItemCardQuantity
} from "./CartItemCard.styles";

const CartItemCard = ({data, onIncrement, onDecrement, onRemove, ...rest}: CartItemCardProps) => {
  return (
    <StyledCartItemCard {...rest}>
      <StyledCartItemCardPicture src={data.product.picture}/>
      <StyledCartItemCardName to={`/produto/${data.product.id}`} children={data.product.name}/>
      <StyledCartItemCardPrice data={data}/>

      <StyledCartItemCardQuantity
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onRemove={onRemove}
        data={data}
      />

      {Boolean(data.selectedCustomizations.length) && (
        <StyledCartItemCardCustomizations data={data}/>
      )}
    </StyledCartItemCard>
  )
}

export default CartItemCard;