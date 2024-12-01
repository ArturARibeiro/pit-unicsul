import {v4 as uuid} from 'uuid';

// Types
import type {CartCustomization, CartItem} from "@modules/cart/types";
import type {Product} from "@modules/product/types";

export const createFromProduct = (product: Product, selections: CartCustomization[] = []): CartItem => ({
  id: uuid(),
  product: product,
  quantity: product.quantity_gap,
  amount: product.promotion_price || product.base_price,
  selectedCustomizations: selections
})