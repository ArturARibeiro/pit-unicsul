import {lazy} from "react";

// Types
import type {Module} from "@modules/common/types/module";

// HOCs
import withSuspense from "@modules/common/presentation/hocs/withSuspense";

// Layouts
import MainLayout from "@common/presentation/layouts/MainLayout";

// Pages
import LandingPage from "@modules/application/presentation/pages/LandingPage";

const NotFound = lazy(() => import('@modules/application/presentation/pages/NotFound'));

const ApplicationModule: Module = {
  name: 'Application Module',

  // Module Routes
  routes: [
    {
      path: '/',
      layout: MainLayout,
      lazy: LandingPage,
    },
    {
      path: '/*',
      layout: MainLayout,
      Component: withSuspense(NotFound),
    },
  ],
}

export default ApplicationModule;