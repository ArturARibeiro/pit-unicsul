import {lazy} from "react";

// Types
import type {Module} from "@common/types/module";

// HOCs
import withSuspense from "@common/presentation/hocs/withSuspense";

// Layout
import MainLayout from "@common/presentation/layouts/MainLayout";

// Pages
const OrderPage = lazy(() => import('@modules/order/presentation/pages/OrderPage'));
const OrderListPage = lazy(() => import('@modules/order/presentation/pages/OrderListPage'));

const OrderModule: Module = {
  name: 'Order Module',

  routes: [
    {
      path: '/orders',
      protected: true,
      layout: MainLayout,
      Component: withSuspense(OrderListPage),
    },
    {
      path: '/orders/:order_id',
      protected: true,
      layout: MainLayout,
      Component: withSuspense(OrderPage),
    }
  ]
}

export default OrderModule;