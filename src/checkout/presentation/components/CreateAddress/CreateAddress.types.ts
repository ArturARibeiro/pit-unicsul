import type {Address} from "@modules/user/types";

export interface CreateAddressProps {
  onCreate?: (address: Omit<Address, 'id'>) => void;
}