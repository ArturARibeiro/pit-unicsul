import {ScrollRestoration, useLoaderData, useNavigate} from "react-router-dom";
import {useCallback, useEffect, useReducer, useState} from "react";

// Types
import type {CartCustomization} from "@modules/cart/types";
import type {Product} from "@modules/product/types";

// Hooks
import useCart from "@modules/cart/domain/hooks/useCart.ts";

// DTOs
import {createFromProduct} from "@modules/cart/data/dtos/CartItemDto";

// Reducers
import CartItemReducer from "@modules/cart/domain/reducers/CartItemReducer";

// Components
import Each from "@modules/common/presentation/components/atoms/Each";
import ProductPrice from "@modules/product/presentation/components/ProductPrice";
import Button from "@common/presentation/components/atoms/Button";
import ProductQuantity from "@modules/product/presentation/components/ProductQuantity";
import ProductCustomization from "@modules/product/presentation/components/ProductCustomization";
import Textarea from "@common/presentation/components/atoms/Textarea";

// Styled components
import {
  StyledProductPage,
  StyledProductPageActions,
  StyledProductPageDescription,
  StyledProductPageInfo,
  StyledProductPageName,
  StyledProductPageNavigation,
  StyledProductPageNavigationButton,
  StyledProductPagePicture,
  StyledProductPageSku,
} from "./ProductPage.styles";

const ProductPage = () => {
  const product = useLoaderData() as Product;
  const navigate = useNavigate();
  const [cartItem, cartItemAction] = useReducer(CartItemReducer, createFromProduct(product));
  const [valid, setValid] = useState<boolean>(false);
  const { addItem } = useCart();

  const handleIncrementQuantity = () => {
    cartItemAction({ type: "INCREMENT_QUANTITY" });
  };

  const handleDecrementQuantity = () => {
    cartItemAction({ type: "DECREMENT_QUANTITY" });
  };

  const handleAddNotes = (notes: string) => {
    cartItemAction({type: "UPDATE_NOTE", payload: notes});
  }

  const handleEditCustomization = useCallback((customization: CartCustomization) => {
    cartItemAction({ type: "EDIT_CUSTOMIZATION", payload: customization });
  }, []);

  const handleGoBack = () => {
    if (history.length > 2) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  const handleSharePage = () => {
    navigator.share({
      url: location.href,
      title: cartItem.product.name,
      text: "Confira essa delícia! \n",
    });
  };

  const handleAddProductToCart = () => {
    if (valid) {
      addItem(cartItem);
      navigate("/");
    }
  }

  useEffect(() => {
    setValid(() => (
      !cartItem.product.customizations.some((customization) => (
        customization.is_required &&
        !cartItem.selectedCustomizations.some(
          selected => selected.customizationId === customization.id && selected.options.length
        )
      ))
    ));
  }, [cartItem.selectedCustomizations, cartItem.product.customizations, cartItem]);

  return cartItem.product && (
    <div className="container py-md-4 px-0">
      <ScrollRestoration />

      <StyledProductPageNavigation>
        <StyledProductPageNavigationButton onClick={handleGoBack}>
          <i className="bi bi-arrow-left"></i>
        </StyledProductPageNavigationButton>
        <StyledProductPageNavigationButton onClick={handleSharePage}>
          <i className="bi bi-share"></i>
        </StyledProductPageNavigationButton>
      </StyledProductPageNavigation>

      <StyledProductPage>
        <StyledProductPagePicture src={cartItem.product.picture}/>

        <div className="d-flex flex-column">
          <StyledProductPageInfo className="px-3">
            <StyledProductPageSku>SKU: {cartItem.product.sku}</StyledProductPageSku>
            <StyledProductPageName>{cartItem.product.name}</StyledProductPageName>
            <StyledProductPageDescription>{cartItem.product.description}</StyledProductPageDescription>
            <ProductPrice
              basePrice={cartItem.product.base_price}
              promotionPrice={cartItem.product.promotion_price}
            />
          </StyledProductPageInfo>

          <Each data={cartItem.product.customizations} render={(customization) => (
            <ProductCustomization
              customization={customization}
              selections={cartItem.selectedCustomizations.find(c => c.customizationId === customization.id)}
              onChange={handleEditCustomization}
            />
          )}/>

          <label className="d-flex flex-column my-3 px-3">
            <h6 className="mb-1">Alguma observação?</h6>
            <Textarea
              value={cartItem.notes}
              placeholder="Adicione um comentário"
              onChange={e => handleAddNotes(e.target.value)}
            />
          </label>

          <StyledProductPageActions>
            <ProductQuantity
              unit={cartItem.product.unit}
              quantity={cartItem.quantity}
              onDecrement={handleDecrementQuantity}
              onIncrement={handleIncrementQuantity}
            />
            <Button className="w-100" onClick={handleAddProductToCart} disabled={!valid}>
              Adicionar
            </Button>
          </StyledProductPageActions>
        </div>
      </StyledProductPage>
    </div>
  );
};

export default ProductPage;
