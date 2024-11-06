import {HTMLAttributes} from "react";

export interface ProductPriceProps extends HTMLAttributes<HTMLDivElement> {
  basePrice: number;
  promotionPrice?: number;
  currencySymbol?: string;
  times?: number;
}