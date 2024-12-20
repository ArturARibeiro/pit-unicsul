import {lazy} from "react";

// Types
import type {Module} from "@common/types/module";

// HOCs
import withSuspense from "@common/presentation/hocs/withSuspense";

// Layout
import MainLayout from "@common/presentation/layouts/MainLayout";

// Pages
const LoginPage = lazy(() => import('@modules/authentication/presentation/pages/LoginPage'));
const ProfilePage = lazy(() => import('@modules/authentication/presentation/pages/ProfilePage'));

const AuthenticationModule: Module = {
  name: 'Authentication Module',

  routes: [
    {
      path: '/login',
      Component: withSuspense(LoginPage),
    },
    {
      path: '/profile',
      protected: true,
      layout: MainLayout,
      Component: withSuspense(ProfilePage),
    },
  ]
}

export default AuthenticationModule;