// Types
import type {ProductCategory} from "@modules/product/types";

// Services
import ApiService from "@common/data/services/ApiService";

export default {
  getAll: (): Promise<ProductCategory[]> => {
    return new Promise(resolve => {
      const request = ApiService.get<ProductCategory[]>('/api/categories');

      request.then(response => {
        resolve(response.data);
      });
    })
  },
  find: (categorySlug: ProductCategory['slug']): Promise<ProductCategory | null> => {
    return new Promise(resolve => {
      const request = ApiService.get<ProductCategory>(`/api/categories/${categorySlug}`);

      request.then(response => {
        resolve(response.data ?? null);
      })
    })
  }
}