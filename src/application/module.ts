import {lazy} from "react";

// Types
import type {Module} from "@modules/common/types/module";

// Layouts
import withSuspense from "@modules/common/presentation/hocs/withSuspense";

// Pages
const LandingPage = lazy(() => import('@modules/application/presentation/pages/LandingPage'));

const ApplicationModule: Module = {
  name: 'Application Module',

  // Module Routes
  routes: [
    {
      path: '/',
      Component: withSuspense(LandingPage),
    },
  ],
}

export default ApplicationModule;