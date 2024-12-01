// Types
import type {Order} from "@modules/order/types";
import type {OrderServiceCreateData} from "./OrderService.types";

// Services
import ApiService from "@common/data/services/ApiService";

export default {
  getAll: (): Promise<Order[]> => {
    return new Promise(resolve => {
      const request = ApiService.get<Order[]>('/api/orders');

      request.then(response => {
        resolve(response.data);
      });
    })
  },
  find: (orderId: Order['id']): Promise<Order | null> => {
    return new Promise(resolve => {
      const request = ApiService.get<Order>(`/api/orders/${orderId}`);

      request.then(response => {
        resolve(response.data ?? null);
      })
    })
  },
  create: (data: OrderServiceCreateData): Promise<Order> => {
    return new Promise<Order>(resolve => {
      const request = ApiService.post<Order>(`/api/orders`, data);

      request.then(response => {
        resolve(response.data);
      })
    })
  },
  rate: (id: Order['id'], rate: number, review: string = ''): Promise<Order> => {
    return new Promise<Order>(resolve => {
      const request = ApiService.post<Order>(`/api/orders/${id}/rate`, {rate, review});

      request.then(response => {
        resolve(response.data);
      })
    })
  },
  finish: (id: Order['id']): Promise<Order> => {
    return new Promise<Order>(resolve => {
      const request = ApiService.post<Order>(`/api/orders/${id}/finish`);

      request.then(response => {
        resolve(response.data);
      })
    })
  },
  cancel: (id: Order['id']): Promise<Order> => {
    return new Promise<Order>(resolve => {
      const request = ApiService.post<Order>(`/api/orders/${id}/cancel`);

      request.then(response => {
        resolve(response.data);
      })
    })
  }
}