import type {HTMLAttributes} from "react";
import type {OrderItem} from "@modules/order/types";

export interface OrderItemCardProps extends HTMLAttributes<HTMLElement> {
  data: OrderItem;

  onIncrement?: () => void;
  onDecrement?: () => void;
  onRemove?: () => void;
}