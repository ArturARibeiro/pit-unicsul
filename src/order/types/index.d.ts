import type {Product} from "@modules/product/types";
import type {Address, Card} from "@modules/user/types";

export type OrderStatus = 'pending' | 'preparing' | 'transport' | 'concluded' | 'canceled';

export type Order = {
  id: string; // UUID V4
  date: string;
  status: OrderStatus;
  review?: string;
  rate?: number;
  card: Card;
  address: Address;
  items: OrderItem[];
}

export type OrderItem = {
  id: string;
  quantity: number;
  amount: number;
  product: Product;
}