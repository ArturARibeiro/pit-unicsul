import {CartCustomization, CartItem} from "@modules/cart/types";
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

const cartItemReducer = (state: CartItem, action: CartItemAction): CartItem => {
  switch (action.type) {
    case "INCREMENT_QUANTITY":
      return {...state, quantity: state.quantity + state.product.quantityGap};
    case "DECREMENT_QUANTITY":
      return {...state, quantity: Math.max(state.quantity - state.product.quantityGap, state.product.quantityGap)};
    case "EDIT_CUSTOMIZATION":
      return {...state, selectedCustomizations: updateCustomizations(state.selectedCustomizations, action.payload)};
    default:
      return state;
  }
}

export default cartItemReducer;