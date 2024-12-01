import type {CartCustomization, CartItem} from "@modules/cart/types";
import type {Product} from "@modules/product/types";
import type {CartItemAction} from "./CartItemReducer.types";

const updateCustomizations = (customizations: CartCustomization[], newCustomization: CartCustomization) => {
  const {customizationId} = newCustomization;

  return customizations.some(customization => customization.customizationId === customizationId)
    ? customizations.map(customization =>
      customization.customizationId === customizationId
        ? newCustomization
        : customization
    )
    : [...customizations, newCustomization];
}

const calculateAmount = (
  { base_price, promotion_price, customizations }: Product,
  quantity: number,
  cartCustomizations: CartCustomization[] = []
): number => {
  const base = promotion_price ?? base_price;
  const customizationCost = cartCustomizations.reduce((total, { customizationId, options }) => {
    const customization = customizations.find((c) => c.id === customizationId);
    const optionTotal = customization
      ? options.reduce((sum, { optionId }) => {
        const option = customization.options.find((o) => o.id === optionId);
        return sum + (option?.price_modifier ?? 0);
      }, 0)
      : 0;
    return total + optionTotal;
  }, 0);
  return (base + customizationCost) * quantity;
};

const cartItemReducer = (state: CartItem, action: CartItemAction): CartItem => {
  const { product, quantity, selectedCustomizations } = state;

  switch (action.type) {
    case "INCREMENT_QUANTITY": {
      const newQuantity = quantity + product.quantity_gap;
      const newAmount = calculateAmount(product, newQuantity, selectedCustomizations);
      return { ...state, quantity: newQuantity, amount: newAmount };
    }
    case "DECREMENT_QUANTITY": {
      const newQuantity = Math.max(quantity - product.quantity_gap, product.quantity_gap);
      const newAmount = calculateAmount(product, newQuantity, selectedCustomizations);
      return { ...state, quantity: newQuantity, amount: newAmount };
    }
    case "UPDATE_NOTE":
      return { ...state, notes: action.payload };
    case "EDIT_CUSTOMIZATION": {
      const updatedCustomizations = updateCustomizations(selectedCustomizations, action.payload);
      const newAmount = calculateAmount(product, quantity, updatedCustomizations);
      return { ...state, selectedCustomizations: updatedCustomizations, amount: newAmount };
    }
    default:
      return state;
  }
};

export default cartItemReducer;
