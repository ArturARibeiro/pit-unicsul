import {v4 as uuid} from "uuid";

// Types
import type {Address, Order} from "@modules/order/types";
import type {Cart} from "@modules/cart/types";

// DTOs
import {createFromCartItem} from '@modules/order/data/dtos/OrderItemDto';

export const createFromCart = (cart: Cart, address: Address): Order => {
  const items = cart.items.flatMap(item => createFromCartItem(item));

  return {
    id: uuid(),
    date: new Date().toISOString(),
    status: 'pending',
    address,
    items,
  }
}