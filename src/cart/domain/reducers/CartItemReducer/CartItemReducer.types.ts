import {CartCustomization} from "@modules/cart/types";

export type CartItemAction =
  | { type: 'INCREMENT_QUANTITY'; }
  | { type: 'DECREMENT_QUANTITY'; }
  | { type: 'UPDATE_NOTE'; payload: string }
  | { type: 'EDIT_CUSTOMIZATION'; payload: CartCustomization };