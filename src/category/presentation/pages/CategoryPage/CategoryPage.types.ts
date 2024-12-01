import type {RouteParams} from "@common/types/route";
import {Product, ProductCategory} from "@modules/product/types";

export interface CategoryPageParams extends RouteParams {
  slug?: string;
}

export interface CategoryPageData {
  category: ProductCategory;
  products: Product[];
}