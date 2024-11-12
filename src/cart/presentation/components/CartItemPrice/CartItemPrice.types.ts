import type {HTMLAttributes} from "react";
import type {CartItem} from "@modules/cart/types";

export interface CartItemPriceProps extends HTMLAttributes<HTMLElement> {
  data: CartItem;
}