// Types
import type {CardServiceCreateData} from "./CardService.types";
import type {Card} from "@modules/user/types";

// Services
import ApiService from "@common/data/services/ApiService";

export default {
  create: (data: CardServiceCreateData): Promise<Card> => {
    return new Promise<Card>((resolve, reject) => {
      data.number = data.number.replace(/\D/g, '');

      const request = ApiService.post<Card>(`/api/cards`, data);

      request.then(response => {
        resolve(response.data);
      })

      request.catch(error => {
        reject(error);
      })
    })
  }
}