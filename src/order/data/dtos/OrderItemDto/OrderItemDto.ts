import {v4 as uuid} from 'uuid';

// Types
import type {OrderItem} from "@modules/order/types";
import type {CartItem} from "@modules/cart/types";

export const createFromCartItem = (cartItem: CartItem): OrderItem => {
  return {
    id: uuid(),
    product_id: cartItem.product.id,
    price: cartItem.product.promotionPrice ?? cartItem.product.basePrice,
    quantity: cartItem.quantity,
  }
}