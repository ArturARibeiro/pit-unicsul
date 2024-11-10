import {ScrollRestoration, useNavigate, useParams} from "react-router-dom";
import {useReducer} from "react";

// Types
import type {ProductPageRouteParams} from "./ProductPage.types.ts";

// DTOs
import {createFromProductId} from "@modules/cart/data/dtos/CartItemDto";

// Reducers
import CartItemReducer from "@modules/cart/domain/reducers/CartItemReducer";

// Components
import Each from "@modules/common/presentation/components/atoms/Each";
import ProductPrice from "@modules/product/presentation/components/ProductPrice";
import Button from "@common/presentation/components/atoms/Button";
import ProductQuantity from "@modules/product/presentation/components/ProductQuantity";
import ProductCustomization from "@modules/product/presentation/components/ProductCustomization";

// Styled components
import {
  StyledProductPageActions,
  StyledProductPageDescription,
  StyledProductPageInfo,
  StyledProductPageName,
  StyledProductPageNavigation,
  StyledProductPageNavigationButton,
  StyledProductPagePicture,
  StyledProductPageSku
} from "./ProductPage.styles";
import {CartCustomization} from "@modules/cart/types";

const ProductPage = () => {
  const { product_id } = useParams<ProductPageRouteParams>();
  const [{ product, quantity, selectedCustomizations }, dispatch] = useReducer(CartItemReducer, createFromProductId(product_id!));
  const navigate = useNavigate();

  console.log(quantity, selectedCustomizations);
  const handleIncrementQuantity = () => {
    dispatch({type: 'INCREMENT_QUANTITY'});
  }

  const handleDecrementQuantity = () => {
    dispatch({type: 'DECREMENT_QUANTITY'});
  }

  const handleEditCustomization = (customization: CartCustomization) => {
    dispatch({type: 'EDIT_CUSTOMIZATION', payload: customization});
  }

  const handleGoBack = () => {
    navigate(-1);
  }

  const handleSharePage = () => {
    window.navigator.share({
      url: window.location.href,
      title: product.name,
      text: 'Confira essa delícia!'
    })
  }

  return product && (
    <div className="container px-0">
      <StyledProductPageNavigation>
        <StyledProductPageNavigationButton onClick={handleGoBack}>
          <i className="bi bi-arrow-left"></i>
        </StyledProductPageNavigationButton>
        <StyledProductPageNavigationButton onClick={handleSharePage}>
          <i className="bi bi-share"></i>
        </StyledProductPageNavigationButton>
      </StyledProductPageNavigation>

      <ScrollRestoration />
      {/*<Breadcrumb className="mb-3 d-none d-md-flex" items={breadcrumb} />*/}

      <div className="row g-3">
        <div className="col-12 col-md-5 col-lg-6">
          <StyledProductPagePicture src={product.picture} />
        </div>
        <div className="col-12 col-md-7 col-lg-6">
          <StyledProductPageInfo className="px-3">
            <StyledProductPageSku>SKU: {product.sku}</StyledProductPageSku>
            <StyledProductPageName>{product.name}</StyledProductPageName>
            <StyledProductPageDescription>{product.description}</StyledProductPageDescription>
            <ProductPrice basePrice={product.basePrice} promotionPrice={product.promotionPrice} />
          </StyledProductPageInfo>

          <Each data={product.customizations} render={customization => (
            <ProductCustomization
              customization={customization}
              selections={selectedCustomizations.find(c => c.customizationId == customization.id)}
              onChange={handleEditCustomization}
            />
          )}/>

          <label className="d-flex flex-column mb-3 px-3">
            <h6 className="mb-1">Alguma observação?</h6>
            <textarea placeholder="Adicione um comentário" className="p-2 rounded-2 border"></textarea>
          </label>

          <StyledProductPageActions>
            <ProductQuantity
              unit={product.unit}
              quantity={quantity}
              onDecrement={handleDecrementQuantity}
              onIncrement={handleIncrementQuantity}
            />
            <Button className="w-100">Adicionar</Button>
          </StyledProductPageActions>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
