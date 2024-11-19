import useAuth from "@modules/authentication/domain/hooks/useAuth.ts";

// Types
import {ProtectedProps} from "./Protected.types";

const Protected = ({ children }: ProtectedProps) => {
  const {check} = useAuth();

  if (!check) {
    window.location.href = '/login';
  }

  return children;
}

export default Protected;