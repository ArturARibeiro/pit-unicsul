import {useNavigate} from "react-router-dom";

// Hooks
import useCart from "@modules/cart/domain/hooks/useCart.ts";
import useAuth from "@modules/authentication/domain/hooks/useAuth.ts";

// Styled Components
import {
  StyledMainLayoutHeader,
  StyledMainLayoutHeaderBrand,
  StyledMainLayoutHeaderButton,
  StyledMainLayoutHeaderContainer,
  StyledMainLayoutHeaderLocation,
  StyledMainLayoutHeaderLocationSelect,
  StyledMainLayoutHeaderProfile,
} from "./MainLayoutHeader.styles";

const MainLayoutHeader = () => {
  const {state} = useCart();
  const auth = useAuth();
  const navigate = useNavigate();

  const handleNavigateToHomePage = () => {
    navigate('/');
  }

  const handleNavigateToProfilePage = () => {
    return auth.check ? navigate('/profile') : navigate('/login');
  }

  return (
    <StyledMainLayoutHeader>
      <StyledMainLayoutHeaderContainer className="container">
        <StyledMainLayoutHeaderBrand
          src="/favicon_512.svg"
          onClick={handleNavigateToHomePage}
        />

        <StyledMainLayoutHeaderLocation>
          <StyledMainLayoutHeaderLocationSelect children="Guarulhos, SP"/>
        </StyledMainLayoutHeaderLocation>

        <div className="d-inline-flex gap-2">
          <StyledMainLayoutHeaderProfile onClick={handleNavigateToProfilePage}>
            <i className="bi bi-person"></i>
          </StyledMainLayoutHeaderProfile>

          <StyledMainLayoutHeaderButton
            $badge={state.items.length}
            data-bs-toggle="offcanvas"
            data-bs-target="#cart-offcanvas"
          >
            <i className="bi bi-cart"></i>
          </StyledMainLayoutHeaderButton>
        </div>
      </StyledMainLayoutHeaderContainer>
    </StyledMainLayoutHeader>
  );
};

export default MainLayoutHeader;
