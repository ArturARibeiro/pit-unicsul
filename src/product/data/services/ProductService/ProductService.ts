// Types
import type {Product} from "@modules/product/types";

// Services
import ApiService from "@common/data/services/ApiService";

export default {
  getAll: (query?: Record<string, string>): Promise<Product[]> => {
    return new Promise(resolve => {
      const params = new URLSearchParams(query);
      const request = ApiService.get<Product[]>(`/api/products?${params}`);

      request.then(response => {
        resolve(response.data);
      });
    })
  },
  find: (productId: Product['id']): Promise<Product | null> => {
    return new Promise(resolve => {
      const request = ApiService.get<Product>(`/api/products/${productId}`);

      request.then(response => {
        resolve(response.data ?? null);
      })
    })
  }
}