import {Product} from "@modules/product/types";

export interface ProductQuantityProps {
  quantity: number;
  unit?: Product['unit']

  onIncrement?: () => void;
  onDecrement?: () => void;
}