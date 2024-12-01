// Types
import type {Address} from "@modules/user/types";

// Services
import ApiService from "@common/data/services/ApiService";

export default {
  find: (id: string): Promise<Address> => {
    return new Promise<Address>((resolve, reject) => {
      const request = ApiService.get<Address>(`/api/addresses/${id}`);

      request.then(response => {
        resolve(response.data);
      })

      request.catch(error => {
        reject(error);
      })
    })
  },
  create: (data: Omit<Address, 'id'>): Promise<Address> => {
    return new Promise<Address>((resolve, reject) => {
      const request = ApiService.post<Address>(`/api/addresses`, data);

      request.then(response => {
        resolve(response.data);
      })

      request.catch(error => {
        reject(error);
      })
    })
  }
}