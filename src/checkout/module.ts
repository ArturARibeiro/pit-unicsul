import {lazy} from "react";

// Types
import type {Module} from "@modules/common/types/module";

// HOCs
import withSuspense from "@modules/common/presentation/hocs/withSuspense";

// Layouts
import MainLayout from "@common/presentation/layouts/MainLayout";

// Pages
const CheckoutPage = lazy(() => import('@modules/checkout/presentation/pages/CheckoutPage'));

const CheckoutModule: Module = {
  name: 'Checkout Module',

  // Module Routes
  routes: [
    {
      path: '/checkout',
      layout: MainLayout,
      Component: withSuspense(CheckoutPage),
    },
  ],
}

export default CheckoutModule;