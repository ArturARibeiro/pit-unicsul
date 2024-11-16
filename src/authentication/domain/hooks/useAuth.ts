import {useContext} from "react";

// Contexts
import AuthContext from "@modules/authentication/domain/contexts/AuthContext";

const useAuth = () => {
  return useContext(AuthContext);
}

export default useAuth;