// Types
import {Order} from "@modules/order/types";

// Services
import OrderService from "@modules/order/data/services/OrderService";

export default async function (): Promise<Order[]> {
  return await OrderService.getAll();
}