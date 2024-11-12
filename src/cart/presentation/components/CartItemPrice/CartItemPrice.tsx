// Types
import type {CartItemPriceProps} from "./CartItemPrice.types";

// Utils
import {formatCurrency} from "@modules/product/domain/utils/money";

// Styled components
import {StyledCartItemBasePrice, StyledCartItemPrice, StyledCartItemPromotionPrice} from "./CartItemPrice.styles";

const CartItemPrice = ({data, ...rest}: CartItemPriceProps) => {
  return (
    <StyledCartItemPrice {...rest}>
      {data.product.promotionPrice && (
        <StyledCartItemPromotionPrice children={formatCurrency(data.amount)}/>
      )}

      <StyledCartItemBasePrice children={formatCurrency(data.amount)}/>
    </StyledCartItemPrice>
  )
}

export default CartItemPrice;