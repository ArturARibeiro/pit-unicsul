import {createContext} from "react";

// Types
import type {AuthContextData} from "./AuthContext.types";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export default AuthContext;