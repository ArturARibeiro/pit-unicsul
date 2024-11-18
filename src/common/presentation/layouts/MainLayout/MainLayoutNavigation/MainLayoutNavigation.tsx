import {useLocation, useNavigate} from "react-router-dom";

// Hooks
import useAuth from "@modules/authentication/domain/hooks/useAuth.ts";

// Styled components
import {
  StyledMainLayoutNavigation,
  StyledMainLayoutNavigationMenu,
  StyledMainLayoutNavigationMenuItem
} from "./MainLayoutNavigation.styles";

const MainLayoutNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const handleGoToHomePage = () => {
    navigate("/");
  }

  const handleGoToSearchPage = () => {
    navigate("/products/search");
  }

  const handleGoToOrdersPage = () => {
    navigate("/orders");
  }

  const handleGoToProfilePage = () => {
    return auth.check ? navigate("/profile") : navigate("/login");
  }

  return (
    <StyledMainLayoutNavigation>
      <StyledMainLayoutNavigationMenu>
        <StyledMainLayoutNavigationMenuItem
          aria-selected={location.pathname === '/'}
          onClick={handleGoToHomePage}
        >
          {location.pathname === '/' ? (
            <i className="bi bi-house-fill"></i>
          ) : (
            <i className="bi bi-house"></i>
          )}
          Início
        </StyledMainLayoutNavigationMenuItem>
        <StyledMainLayoutNavigationMenuItem
          aria-selected={location.pathname === '/products/search'}
          onClick={handleGoToSearchPage}
        >
          <i className="bi bi-search"></i>
          Buscar
        </StyledMainLayoutNavigationMenuItem>
        <StyledMainLayoutNavigationMenuItem
          aria-selected={location.pathname.includes('/orders')}
          onClick={handleGoToOrdersPage}
        >
          <i className="bi bi-receipt"></i>
          Pedidos
        </StyledMainLayoutNavigationMenuItem>
        <StyledMainLayoutNavigationMenuItem
          aria-selected={location.pathname === '/profile'}
          onClick={handleGoToProfilePage}
        >
          {location.pathname === '/profile' ? (
            <i className="bi bi-person-fill"></i>
          ) : (
            <i className="bi bi-person"></i>
          )}
          Perfil
        </StyledMainLayoutNavigationMenuItem>
      </StyledMainLayoutNavigationMenu>
    </StyledMainLayoutNavigation>
  )
}

export default MainLayoutNavigation;