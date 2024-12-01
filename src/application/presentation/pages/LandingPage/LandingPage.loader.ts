import ProductService from "@modules/product/data/services/ProductService";

export default async function () {
  const [products] = await Promise.all([
    ProductService.getAll(),
  ])

  return products;
}