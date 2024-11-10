// Hooks
import useCart from "@modules/cart/domain/hooks/useCart.ts";

// Styled Components
import {
  StyledMainLayoutHeader,
  StyledMainLayoutHeaderButton,
  StyledMainLayoutHeaderLocation,
  StyledMainLayoutHeaderLocationSelect
} from "./MainLayoutHeader.styles";

const MainLayoutHeader = () => {
  const {state} = useCart();

  return (
    <StyledMainLayoutHeader>
      <StyledMainLayoutHeaderButton>
        <i className="bi bi-list"></i>
      </StyledMainLayoutHeaderButton>

      <StyledMainLayoutHeaderLocation>
        <StyledMainLayoutHeaderLocationSelect children="Guarulhos, SP"/>
      </StyledMainLayoutHeaderLocation>


      <StyledMainLayoutHeaderButton $badge={state.items.length}>
        <i className="bi bi-cart"></i>
      </StyledMainLayoutHeaderButton>
    </StyledMainLayoutHeader>
  )
}

export default MainLayoutHeader;