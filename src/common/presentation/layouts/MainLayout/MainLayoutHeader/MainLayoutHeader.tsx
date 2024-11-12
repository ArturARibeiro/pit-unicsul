// Hooks
import useCart from "@modules/cart/domain/hooks/useCart.ts";

// Components

// Styled Components
import {
  StyledMainLayoutHeader,
  StyledMainLayoutHeaderButton,
  StyledMainLayoutHeaderContainer,
  StyledMainLayoutHeaderLocation,
  StyledMainLayoutHeaderLocationSelect
} from "./MainLayoutHeader.styles";

const MainLayoutHeader = () => {
  const {state} = useCart();

  return (
    <StyledMainLayoutHeader>
      <StyledMainLayoutHeaderContainer className="container">
        <StyledMainLayoutHeaderLocation>
          <StyledMainLayoutHeaderLocationSelect children="Guarulhos, SP"/>
        </StyledMainLayoutHeaderLocation>

        <StyledMainLayoutHeaderButton $badge={state.items.length} data-bs-toggle="offcanvas" data-bs-target="#cart-offcanvas">
          <i className="bi bi-cart"></i>
        </StyledMainLayoutHeaderButton>
      </StyledMainLayoutHeaderContainer>
    </StyledMainLayoutHeader>
  )
}

export default MainLayoutHeader;