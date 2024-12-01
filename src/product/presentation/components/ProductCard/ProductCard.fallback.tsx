// Types
import {ProductCardFallbackProps} from "./ProductCard.types";

// Styled components
import {
  StyledProductCard,
  StyledProductCardName,
  StyledProductCardPicture,
  StyledProductCardRating
} from "./ProductCard.styles";

const ProductCardFallback = ({variant, ...rest}: ProductCardFallbackProps) => {
  return (
    <StyledProductCard $variant={variant} {...rest} className={`placeholder-wave ${rest.className ?? null}`}>
      <StyledProductCardPicture className="placeholder"/>
      <StyledProductCardName children="Lorem ipsum dolor" className="placeholder"/>
      <StyledProductCardRating rating={5.0} className="placeholder"/>
    </StyledProductCard>

  )
}

export default ProductCardFallback;