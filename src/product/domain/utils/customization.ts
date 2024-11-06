import {CartCustomizationOption} from "@modules/cart/types";
import {Product} from "@modules/product/types";

export const calculateProductTotal = (product: Product, selectedOptions: CartCustomizationOption[]): number => {
  if (!product || !product.customizations) return 0;

  const price = product.promotionPrice || product.basePrice;

  return price + selectedOptions.reduce((total, option) => {
    const customization = product.customizations.find(custom =>
      custom.options.some(opt => opt.id === option.optionId)
    );

    if (customization) {
      const selectedOption = customization.options.find(opt => opt.id === option.optionId);
      return total + (selectedOption?.priceModifier || 0);
    }

    return total;
  }, 0);
};
