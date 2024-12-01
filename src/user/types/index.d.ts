export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  addresses: Address[];
  cards: Card[];
}

export interface Address {
  id: string;
  name: string;
  zip_code: string;
  state: string;
  city: string;
  district: string;
  street: string;
  number: string;
  complement?: string|null;
  mounted: string;
}

export interface Card {
  id: string;
  name: string;
  number: string;
  type: 'credit'|'debit'|string;
}