import {v4 as uuid} from 'uuid';

// Types
import type {OrderItem} from "@modules/order/types";
import type {CartItem} from "@modules/cart/types";

export const createFromCartItem = (cartItem: CartItem): OrderItem => {
  return {
    id: uuid(),
    product: cartItem.product,
    amount: (cartItem.product.promotion_price ?? cartItem.product.base_price) * cartItem.quantity,
    quantity: cartItem.quantity,
  }
}