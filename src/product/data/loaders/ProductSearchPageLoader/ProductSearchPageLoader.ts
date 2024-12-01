// Types
import {ProductSearchPageLoaderData} from "./ProductSearchPageLoader.types";

// Services
import ProductService from "@modules/product/data/services/ProductService";

export default async function (): Promise<ProductSearchPageLoaderData> {
  return {
    products: await ProductService.getAll(),
  }
}