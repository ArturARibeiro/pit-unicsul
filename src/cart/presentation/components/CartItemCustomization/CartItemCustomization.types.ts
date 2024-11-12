import {CartItem} from "@modules/cart/types";
import {HTMLAttributes} from "react";

export interface CartItemCustomizationProps extends HTMLAttributes<HTMLUListElement> {
  data: CartItem,
}