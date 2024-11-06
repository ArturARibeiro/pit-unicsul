// Types
import type {ProductCategory} from "@modules/product/types";

// Mocks
import categories from "@modules/product/data/mocks/categories.ts";

export const getAll = (): Promise<ProductCategory[]> => {
  return new Promise(resolve => {
    resolve(categories);
  })
}

export const find = (slug: ProductCategory['slug']): Promise<ProductCategory | null> => {
  return new Promise(resolve => {
    const product = categories.find(product => product.slug == slug);
    resolve(product ?? null);
  })
}