import {lazy} from "react";

// Types
import type {Module} from "@common/types/module";

// HOCs
import withSuspense from "@common/presentation/hocs/withSuspense";

// Pages
const LoginPage = lazy(() => import('@modules/authentication/presentation/pages/LoginPage'));
const RegisterPage = lazy(() => import('@modules/authentication/presentation/pages/RegisterPage'));

const AuthenticationModule: Module = {
  name: 'Authentication Module',

  routes: [
    {
      path: '/login',
      Component: withSuspense(LoginPage),
    },
    {
      path: '/register',
      Component: withSuspense(RegisterPage),
    }
  ]
}

export default AuthenticationModule;