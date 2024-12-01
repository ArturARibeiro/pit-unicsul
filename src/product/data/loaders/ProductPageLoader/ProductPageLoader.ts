// Types
import {ProductPageLoaderData, ProductPageLoaderProps} from "./ProductPageLoader.types";

// Services
import ProductService from "@modules/product/data/services/ProductService";

export default async function ({params}: ProductPageLoaderProps): Promise<ProductPageLoaderData> {
  if (params.product_id) {
    const product = await ProductService.find(params?.product_id);

    if (product) {
      return {product}
    }
  }

  throw new Error("Product not found");
}