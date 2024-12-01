import type {User} from "@modules/user/types";

export interface AuthContextData {
  identity?: User | null;
  check: boolean;
  logout: () => void;
  login: (intendedUrl?: string) => void;
}