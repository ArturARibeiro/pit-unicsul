import type {User} from "@modules/authentication/types";

export interface AuthContextData {
  identity?: User | null;
  check: boolean;
  logout: () => void;
  register: (user: User) => boolean;
  login: (email: string, password: string) => boolean;
}