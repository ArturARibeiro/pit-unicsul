import type {Card} from "@modules/user/types";

export type CreateCardProps = {
  onCreate?: (card: CreateCardForm) => void;
}

export type CreateCardForm = Omit<Card, 'id'> & {
  cvv: string;
  validity: string;
}