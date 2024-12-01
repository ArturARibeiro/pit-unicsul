import type {Product} from "@modules/product/types";
import {Address, Card} from "@modules/user/types";

export type OrderServiceCreateData = {
  address_id: Address['id'];
  card_id: Card['id'];
  items: {
    product_id: Product['id'];
    quantity: number;
    amount: number;
  }[]
}