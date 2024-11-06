import type {Cart, CartCustomization, CartItem} from "@modules/cart/types";
import type {Product} from "@modules/product/types";

export type CartContextData = {
  state: Cart;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
  editCustomization: (id: string, customizations: CartCustomization[]) => void;
  clearCart: () => void;
  checkItem: (product_id: Product['id']) => CartItem | null;
}