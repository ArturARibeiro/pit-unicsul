// Types
import {CartItemQuantityProps} from "./CartItemQuantity.types";

// Styled components
import {
  StyledCartItemQuantity,
  StyledCartItemQuantityButton,
  StyledCartItemQuantityLabel
} from "./CartItemQuantity.styles";

const CartItemQuantity = ({data, onIncrement, onDecrement, onRemove}: CartItemQuantityProps) => {
  const handleRemoveItemFromCart = () => {
    if (confirm("Tem certeza que quer remover esse item?")) {
      onRemove?.();
    }
  }

  const handleDecrementQuantity = () => {
    if (data.quantity <= data.product.quantityGap) {
      handleRemoveItemFromCart();
    } else {
      onDecrement?.()
    }
  }

  const handleIncrementQuantity = () => {
    onIncrement?.()
  }

  return <StyledCartItemQuantity>
    <StyledCartItemQuantityButton variant="outline" onClick={handleDecrementQuantity}>
      {data.quantity == data.product.quantityGap ? (
        <i className="bi bi-x"></i>
      ) : (
        <i className="bi bi-dash"></i>
      )}
    </StyledCartItemQuantityButton>
    <StyledCartItemQuantityLabel>
      {data.quantity} {data.product.unit}
    </StyledCartItemQuantityLabel>
    <StyledCartItemQuantityButton onClick={handleIncrementQuantity}>
      <i className="bi bi-plus"></i>
    </StyledCartItemQuantityButton>
  </StyledCartItemQuantity>
}

export default CartItemQuantity;