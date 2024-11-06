// Types
import type {Product} from "@modules/product/types";

// Mocks
import products from "@modules/product/data/mocks/products.ts";

export const getAll = (): Promise<Product[]> => {
  return new Promise(resolve => {
    resolve(products);
  })
}

export const find = (productId: Product['id']): Promise<Product | null> => {
  return new Promise(resolve => {
    const product = products.find(product => product.id == productId);
    resolve(product ?? null);
  })
}