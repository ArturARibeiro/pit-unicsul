// Types
import type {Module} from "@modules/common/types/module";

// Layout
import MainLayout from "@common/presentation/layouts/MainLayout";

// Pages
import CategoryPage from "@modules/category/presentation/pages/CategoryPage";

const CategoryModule: Module = {
  name: 'Category Module',

  // Module Routes
  routes: [
    {
      path: '/categories/:slug',
      layout: MainLayout,
      lazy: CategoryPage,
    },
  ],
}

export default CategoryModule;