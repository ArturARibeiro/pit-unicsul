import type {CartItem} from "@modules/cart/types";
import {HTMLAttributes} from "react";

export interface CartItemQuantityProps extends HTMLAttributes<HTMLDivElement> {
  data: CartItem,
  onIncrement?: () => void
  onDecrement?: () => void
  onRemove?: () => void
}