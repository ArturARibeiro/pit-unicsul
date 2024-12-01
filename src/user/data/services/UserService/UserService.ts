// Types
import type {User} from "@modules/user/types";

// Services
import ApiService from "@common/data/services/ApiService";

export default {
  find: (id: number|'me'): Promise<User> => {
    return new Promise<User>((resolve, reject) => {
      const request = ApiService.get<User>(`/api/users/${id}`);

      request.then(response => {
        resolve(response?.data);
      })

      request.catch(error => {
        reject(error);
      })
    })
  }
}