// Types
import type {ProductPageRouteParams} from "./ProductPage.types";

// Services
import ProductService from "@modules/product/data/services/ProductService";

export default async function ({ params }: {params: ProductPageRouteParams}) {
  return await ProductService.find(params.product_id!);
}