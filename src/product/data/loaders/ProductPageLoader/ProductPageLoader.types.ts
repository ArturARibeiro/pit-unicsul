import type {Product} from "@modules/product/types";

export interface ProductPageLoaderData {
  product: Product;
}

export interface ProductPageLoaderProps {
  params: {
    product_id?: string;
  };
}