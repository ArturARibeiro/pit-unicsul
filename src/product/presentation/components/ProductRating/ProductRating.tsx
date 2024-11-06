// Types
import {ProductRatingProps} from "./ProductRating.types";

// Styled components
import {StyledProductRating} from "./ProductRating.styles";

const ProductRating = ({rating, ...rest}: ProductRatingProps) => {
  return <StyledProductRating {...rest} children={rating}/>
}

export default ProductRating;