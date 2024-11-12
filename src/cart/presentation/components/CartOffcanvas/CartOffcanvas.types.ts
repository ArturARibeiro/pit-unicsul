import type {HTMLAttributes} from "react";
import type {CartItem} from "@modules/cart/types";

export interface CartOffcanvasProps extends HTMLAttributes<HTMLElement> {
  items?: CartItem[];

  onIncrement?: (item: CartItem) => void;
  onDecrement?: (item: CartItem) => void;
  onRemove?: (item: CartItem) => void;
}