import {useEffect, useState} from "react";

// Contexts
import AuthContext from "@modules/authentication/domain/contexts/AuthContext";

// Services
import UserService from "@modules/user/data/services/UserService";
import AuthService from "@modules/authentication/data/services/AuthService";

// Types
import type {User} from "@modules/user/types";
import type {AuthProviderProps} from "./AuthProvider.types";

const AuthProvider = (props: AuthProviderProps) => {
  const [identity, setIdentity] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const check = !!identity;

  const logout = () => {
    AuthService.logout().then(() => {
      setIdentity(null);
    });
  }

  const login = (intendedUrl: string = '/'): void => {
    const redirect = `${location.protocol}//${(`${location.host}/${intendedUrl}`).replace('//', '/')}`;
    window.location.href = `${import.meta.env.VITE_BACKEND_URL}/sid?redirect=${redirect}`;
  }

  useEffect(() => {
    const request = UserService.find('me');

    request.then(user => {
      setIdentity(user);
    })

    request.finally(() => {
      setLoading(false);
    })
  }, []);

  return !loading && (
    <AuthContext.Provider value={{identity, check, login, logout}} {...props}/>
  )
}

export default AuthProvider;