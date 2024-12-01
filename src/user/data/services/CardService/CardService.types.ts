import type {Card} from "@modules/user/types";

export type CardServiceCreateData = Omit<Card, 'id'> & {
  cvv: string;
  validity: string;
}