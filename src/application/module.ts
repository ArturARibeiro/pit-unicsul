import {lazy} from "react";

// Types
import type {Module} from "@modules/common/types/module";

// Layouts
import withSuspense from "@modules/common/presentation/hocs/withSuspense";

// Pages
const ComponentsPage = lazy(() => import('@modules/application/presentation/pages/ComponentsPage'));

const ApplicationModule: Module = {
  name: 'Application Module',

  // Module Routes
  routes: [
    {
      path: '/demo/components',
      Component: withSuspense(ComponentsPage),
    }
  ],
}

export default ApplicationModule;