import type {HTMLAttributes} from "react";
import type {CartItem} from "@modules/cart/types";

export interface CartItemCardProps extends HTMLAttributes<HTMLElement> {
  data: CartItem;

  onIncrement?: () => void;
  onDecrement?: () => void;
  onRemove?: () => void;
}