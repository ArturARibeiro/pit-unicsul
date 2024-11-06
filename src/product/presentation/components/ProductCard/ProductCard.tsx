// Types
import {ProductCardProps} from "./ProductCard.types";

// Styled components
import {
  StyledProductCard,
  StyledProductCardName,
  StyledProductCardPicture,
  StyledProductCardPrice,
  StyledProductCardRating
} from "./ProductCard.styles";

const ProductCard = ({product, variant, ...rest}: ProductCardProps) => {

  return (
    <StyledProductCard $variant={variant} {...rest}>
      <StyledProductCardPicture src={product.picture}/>
      <StyledProductCardName children={product.name}/>
      <StyledProductCardPrice basePrice={product.basePrice} promotionPrice={product.promotionPrice}/>
      <StyledProductCardRating rating={product.rating}/>
    </StyledProductCard>
  )
}

export default ProductCard;