import {useCallback, useEffect, useState} from "react";
import {ScrollRestoration, useParams} from "react-router-dom";

// Types
import type {ProductPageRouteParams} from "./ProductPage.types.ts";
import type {Product, ProductCategory} from "@modules/product/types";

// Services
import * as ProductService from "@modules/product/data/services/ProductService";
import * as CategoryService from "@modules/product/data/services/CategoryService";

// Components
import Each from "@modules/common/presentation/components/atoms/Each";
import ProductPrice from "@modules/product/presentation/components/ProductPrice";
import Breadcrumb from "@common/presentation/components/atoms/Breadcrumb/Breadcrumb.tsx";
import Button from "@common/presentation/components/atoms/Button";
import ProductQuantity from "@modules/product/presentation/components/ProductQuantity";
import ProductCustomization from "@modules/product/presentation/components/ProductCustomization";

// Styled components
import {
  StyledProductPageActions,
  StyledProductPageDescription,
  StyledProductPageInfo,
  StyledProductPageName,
  StyledProductPagePicture,
  StyledProductPageSku
} from "./ProductPage.styles";

const ProductPage = () => {
  const {product_id} = useParams<ProductPageRouteParams>();
  const [product, setProduct] = useState<Product | null>(null);
  const [category, setCategory] = useState<ProductCategory | null>(null);
  const breadcrumb = [
    {name: 'Produtos', href: '/products'},
    {name: category?.name, href: `/categories/${category?.slug}`},
    {name: product?.name},
  ]

  const loadData = useCallback(async () => {
    const products = await ProductService.getAll();
    const product = products.find(p => p.id == product_id!);

    if (product) {
      const category = await CategoryService.find(product.categories[0]);

      setCategory(category);
      setProduct(product);
    }
  }, [product_id])

  useEffect(() => {
    loadData();
  }, [loadData]);

  return product && (
    <div className="container py-3">
      <ScrollRestoration/>
      <Breadcrumb className="mb-3 d-none d-md-flex" items={breadcrumb}/>

      <div className="row g-3">
        <div className="col-12 col-md-5 col-lg-6">
          <StyledProductPagePicture src={product.picture}/>
        </div>
        <div className="col-12 col-md-7 col-lg-6">
          <StyledProductPageInfo>
            <StyledProductPageSku>SKU: {product.sku}</StyledProductPageSku>
            <StyledProductPageName>{product.name}</StyledProductPageName>
            <StyledProductPageDescription>{product.description}</StyledProductPageDescription>
            <ProductPrice basePrice={product.basePrice} promotionPrice={product.promotionPrice}/>
          </StyledProductPageInfo>

          <Each data={product.customizations} render={customization => (
            <ProductCustomization customization={customization}/>
          )}/>

          <StyledProductPageActions>
            <ProductQuantity quantity={product.quantityGap} unit={product.unit}/>
            <Button className="w-100">Adicionar</Button>
          </StyledProductPageActions>
        </div>
      </div>
    </div>
  )
}


export default ProductPage;