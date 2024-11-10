import {lazy} from "react";

// Types
import type {Module} from "@modules/common/types/module";

// HOCs
import withSuspense from "@modules/common/presentation/hocs/withSuspense";

// Pages
const ProductPage = lazy(() => import('@modules/product/presentation/pages/ProductPage'));
const ProductSearchPage = lazy(() => import('@modules/product/presentation/pages/ProductSearchPage'));

const ProductModule: Module = {
  name: 'Product Module',

  // Module Routes
  routes: [
    {
      path: '/products/:product_id',
      Component: withSuspense(ProductPage),
    },
    {
      path: '/products/search',
      Component: withSuspense(ProductSearchPage),
    },
  ],
}

export default ProductModule;