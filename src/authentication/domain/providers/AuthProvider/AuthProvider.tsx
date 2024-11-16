import {useLocalStorage} from "usehooks-ts";

// Contexts
import AuthContext from "@modules/authentication/domain/contexts/AuthContext";

// Types
import type {AuthProviderProps} from "./AuthProvider.types";
import type {User} from "@modules/authentication/types";

const AuthProvider = (props: AuthProviderProps) => {
  const [users, setUsers] = useLocalStorage<User[]>('users', [])
  const [identity, setIdentity] = useLocalStorage<User | null>('identity', null);
  const check = !!identity;

  const logout = () => {
    setIdentity(null);
  }

  const login = (email: string, password: string): boolean => {
    const user = users.find(user => user.email === email && password === password);
    setIdentity(user ?? null);
    return Boolean(user);
  }

  const register = (data: User) => {
    const exists = users.some(user => user.email === data.email);

    if (!exists) {
      setUsers(users => {
        return [...users, data];
      })

      setIdentity(data);
      return true
    }

    return false;
  }

  return <AuthContext.Provider value={{identity, check, login, logout, register}} {...props}/>
}

export default AuthProvider;