import type {ReactNode} from "react";
import {Order} from "@modules/order/types";

export interface NotificationProviderProps {
  children?: ReactNode;
}

export type ServerSentEventData =
  | {event: 'notification', data: Notification}
  | {event: 'order', data: Partial<Order>}

export type Notification = {
  title: string;
  message: string;
}

declare global {
  interface WindowEventMap {
    "sse:order:created": CustomEvent<Partial<Order>>;
    "sse:order:updated": CustomEvent<Partial<Order>>;
    "sse:notification": CustomEvent<Notification>;
  }
}