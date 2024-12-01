// Types
import type {Module} from "@common/types/module";
// Layout
import MainLayout from "@common/presentation/layouts/MainLayout";

// Pages
import OrderListPage from "@modules/order/presentation/pages/OrderListPage";
import OrderPage from "@modules/order/presentation/pages/OrderPage";

const OrderModule: Module = {
  name: 'Order Module',

  routes: [
    {
      path: '/orders',
      protected: true,
      layout: MainLayout,
      lazy: OrderListPage,
    },
    {
      path: '/orders/:order_id',
      protected: true,
      layout: MainLayout,
      lazy: OrderPage,
    }
  ]
}

export default OrderModule;