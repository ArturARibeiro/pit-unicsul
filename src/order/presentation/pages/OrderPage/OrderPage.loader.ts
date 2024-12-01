// Types
import type {Order} from "@modules/order/types";

// Services
import OrderService from "@modules/order/data/services/OrderService";
import {OrderPageParams} from "@modules/order/presentation/pages/OrderPage/OrderPage.types.ts";

export default async function ({params}: {params: OrderPageParams}): Promise<Order> {
  const order = await OrderService.find(params.order_id!);

  if (!order) {
    throw new Error("Order not found!");
  }

  return order;
}