// Types
import type {LandingPageLoaderData} from "./LandingPageLoader.types";

// Services
import ProductService from "@modules/product/data/services/ProductService";

export default async function (): Promise<LandingPageLoaderData> {
  return {
    products: await ProductService.getAll(),
  }
}