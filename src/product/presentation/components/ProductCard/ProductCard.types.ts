import type {HTMLAttributes} from "react";
import type {Product} from "@modules/product/types";

export interface ProductCardProps extends HTMLAttributes<HTMLDivElement> {
  product: Product;
  variant?: 'small'
}