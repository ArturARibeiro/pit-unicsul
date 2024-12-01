// Types
import type {CartItemCustomizationProps} from "./CartItemCustomization.types";

// Components
import Each from "@modules/common/presentation/components/atoms/Each";

// Styled Components
import {StyledCartItemCustomization} from "./CartItemCustomization.styles";
import {formatCurrency} from "@modules/product/domain/utils/money.ts";

const CartItemCustomization = ({data, ...rest}: CartItemCustomizationProps) => {
  const customizations = data.selectedCustomizations.flatMap(({customizationId, options}) => {
    const customization = data.product.customizations.find(c => c.id === customizationId)

    if (customization) {
      const customizationOptions = customization?.options.filter(option => {
        return options.some(o => o.optionId === option.id);
      })

      return {
        title: customization?.name,
        options: customizationOptions,
      }
    }
  }).filter(c => Boolean(c));

  return <StyledCartItemCustomization {...rest}>
    <Each data={customizations} render={customization => (
      <li>
        {customization?.options?.flatMap(o => (
          `${o.name} ${o.price_modifier ? `+${formatCurrency(o.price_modifier)}` : ''}`
        )).join(', ')}
      </li>
    )}/>
  </StyledCartItemCustomization>
}

export default CartItemCustomization;