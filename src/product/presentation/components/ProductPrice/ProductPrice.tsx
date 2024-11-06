// Types
import {ProductPriceProps} from "./ProductPrice.types";

// Utils
import {formatCurrency} from "@modules/product/domain/utils/money";

// Styled components
import {StyledProductBasePrice, StyledProductPrice, StyledProductPromotionPrice} from "./ProductPrice.styles";

const ProductPrice = ({basePrice, promotionPrice, currencySymbol, times = 1, ...rest}: ProductPriceProps) => {

  return (
    <StyledProductPrice {...rest}>
      {promotionPrice && (
        <StyledProductPromotionPrice children={formatCurrency(promotionPrice * times, currencySymbol)}/>
      )}

      <StyledProductBasePrice children={formatCurrency(basePrice * times, currencySymbol)}/>
    </StyledProductPrice>
  )
}

export default ProductPrice;