import {CartCustomization} from "@modules/cart/types";

export type CartItemAction =
  | { type: 'INCREMENT_QUANTITY'; }
  | { type: 'DECREMENT_QUANTITY'; }
  | { type: 'EDIT_CUSTOMIZATION'; payload: CartCustomization };