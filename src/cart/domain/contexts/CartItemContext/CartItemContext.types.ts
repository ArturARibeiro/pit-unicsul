import {CartCustomization, CartItem} from "@modules/cart/types";

export interface CartItemContextData {
  state: CartItem;
  amount: number;
  valid: boolean;
  increment: () => void;
  decrement: () => void;
  customize: (customizations: CartCustomization) => void;
}