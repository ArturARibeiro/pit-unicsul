import {OlHTMLAttributes} from "react";

export interface OrderStatusProps extends OlHTMLAttributes<HTMLOListElement> {
  status: 'pending' | 'preparing' | 'transport' | 'concluded' | 'canceled';
}