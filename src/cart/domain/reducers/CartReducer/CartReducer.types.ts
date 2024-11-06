import {CartCustomization, CartItem} from "@modules/cart/types";

export type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: { id: string } }
  | { type: 'INCREMENT_QUANTITY'; payload: { id: string } }
  | { type: 'DECREMENT_QUANTITY'; payload: { id: string } }
  | { type: 'EDIT_CUSTOMIZATION'; payload: { id: string; customizations: CartCustomization[] } }
  | { type: 'CLEAR_CART' };