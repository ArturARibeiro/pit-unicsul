import type {Product} from "@modules/product/types";

export type Order = {
  id: string; // UUID V4
  date: string;
  status: 'pending' | 'preparing' | 'transport' | 'concluded' | 'canceled';
  address: Address;
  items: OrderItem[];
}

export type Address = {
  zip_code: string;
  address: string;
  number: string;
  complement: string;
}

export type OrderItem = {
  id: string;
  product_id: Product['id'];
  quantity: number;
  price: number;
}