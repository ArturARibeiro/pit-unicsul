// Types
import {CategoryPageParams} from "./CategoryPage.types";

// Services
import CategoryService from "@modules/category/data/services/CategoryService/CategoryService.ts";
import ProductService from "@modules/product/data/services/ProductService";

export default async function ({params}: {params: CategoryPageParams}) {
  const [category, products] = await Promise.all([
    CategoryService.find(params.slug!),
    ProductService.getAll({
      category_slug: params.slug!
    })
  ])

  return {category, products};
}