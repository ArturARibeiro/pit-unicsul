import {Outlet} from "react-router-dom";

// Types
import type {MainLayoutProps} from "./MainLayout.types";
import type {CartItem} from "@modules/cart/types";

// Hooks
import useCart from "@modules/cart/domain/hooks/useCart.ts";

// Components
import CartOffcanvas from "@modules/cart/presentation/components/CartOffcanvas";
import MainLayoutHeader from "./MainLayoutHeader";
import MainLayoutNavigation from "./MainLayoutNavigation";

// Styled components
import {StyledMainLayout, StyledMainLayoutContent} from "./MainLayout.styles";

const MainLayout = (props: MainLayoutProps) => {
  const { state, incrementQuantity, decrementQuantity, removeItem } = useCart();

  const handleDecrementItemQuantity = (cartItem: CartItem) => {
    if (cartItem.id) {
      decrementQuantity(cartItem.id);
    }
  }

  const handleIncrementItemQuantity = (cartItem: CartItem) => {
    if (cartItem.id) {
      incrementQuantity(cartItem.id);
    }
  }

  const handleRemoveItemFromCart = (cartItem: CartItem) => {
    if (cartItem.id) {
      removeItem(cartItem.id);
    }
  }

  return (
    <StyledMainLayout>
      <MainLayoutHeader />
      <StyledMainLayoutContent {...props}>
        <Outlet />
      </StyledMainLayoutContent>
      <MainLayoutNavigation/>
      <CartOffcanvas
        items={state.items}
        onIncrement={handleIncrementItemQuantity}
        onDecrement={handleDecrementItemQuantity}
        onRemove={handleRemoveItemFromCart}
      />
    </StyledMainLayout>
  )
}

export default MainLayout;