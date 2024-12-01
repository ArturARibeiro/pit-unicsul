import {Order} from "@modules/order/types";

export type Notification = {
  title: string;
  message?: string;
}

export type SSEEvent = {
  order?: Partial<Order>[],
  notification?: Notification[]
}