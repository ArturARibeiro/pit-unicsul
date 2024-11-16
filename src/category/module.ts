import {lazy} from "react";

// Types
import type {Module} from "@modules/common/types/module";

// HOCs
import withSuspense from "@modules/common/presentation/hocs/withSuspense";
import MainLayout from "@common/presentation/layouts/MainLayout";

// Pages
const CategoryPage = lazy(() => import('@modules/category/presentation/pages/CategoryPage'));

const CategoryModule: Module = {
  name: 'Category Module',

  // Module Routes
  routes: [
    {
      path: '/categories/:slug',
      layout: MainLayout,
      Component: withSuspense(CategoryPage),
    },
  ],
}

export default CategoryModule;