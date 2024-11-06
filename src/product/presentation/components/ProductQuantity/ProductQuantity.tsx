// Types
import {ProductQuantityProps} from "./ProductQuantity.types";

// Styled Components
import {
  StyledProductQuantity,
  StyledProductQuantityButton,
  StyledProductQuantityLabel
} from "./ProductQuantity.styles.ts";

const ProductQuantity = ({quantity, unit = 'uni', onIncrement, onDecrement}: ProductQuantityProps) => {
  return <StyledProductQuantityLabel>
    <StyledProductQuantityButton onClick={onDecrement} variant="ghost">
      -
    </StyledProductQuantityButton>
    <StyledProductQuantity children={`${quantity} ${unit}`}/>
    <StyledProductQuantityButton onClick={onIncrement} variant="ghost">
      +
    </StyledProductQuantityButton>
  </StyledProductQuantityLabel>
}

export default ProductQuantity;