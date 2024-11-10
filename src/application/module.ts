import {lazy} from "react";

// Types
import type {Module} from "@modules/common/types/module";

// HOCs
import withSuspense from "@modules/common/presentation/hocs/withSuspense";

// Layouts
import MainLayout from "@common/presentation/layouts/MainLayout";

// Pages
const LandingPage = lazy(() => import('@modules/application/presentation/pages/LandingPage'));

const ApplicationModule: Module = {
  name: 'Application Module',

  // Module Routes
  routes: [
    {
      path: '/',
      layout: MainLayout,
      Component: withSuspense(LandingPage),
    },
  ],
}

export default ApplicationModule;