import { Cart } from '@modules/cart/types';

export const createEmptyCart = (): Cart => ({
  items: [],
})