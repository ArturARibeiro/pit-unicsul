import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

// Types
import type {Order} from "@modules/order/types";

// Hooks
import useCart from "@modules/cart/domain/hooks/useCart.ts";
import useAuth from "@modules/authentication/domain/hooks/useAuth.ts";

// Services
import OrderService from "@modules/order/data/services/OrderService";

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
  const [orders, setOrders] = useState<Order[]>([]);
  const {state} = useCart();
  const auth = useAuth();
  const navigate = useNavigate();

  const handleNavigateToHomePage = () => {
    navigate('/');
  }

  const handleNavigateToProfilePage = () => {
    return auth.check ? navigate('/profile') : navigate('/login');
  }

  const handleNavigateToOrdersPage = () => {
    return navigate('/orders');
  }

  useEffect(() => {
    if (auth.check) {
      OrderService.getAll().then(setOrders);
    }
  }, [auth.check]);

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
          {auth.check && (
            <StyledMainLayoutHeaderProfile
              onClick={handleNavigateToOrdersPage}
              $badge={orders.filter(o => (o.status != 'concluded' && o.status != 'canceled')).length}
              title="Pedidos"
            >
              <i className="bi bi-receipt-cutoff"></i>
            </StyledMainLayoutHeaderProfile>
          )}

          <StyledMainLayoutHeaderProfile onClick={handleNavigateToProfilePage} title={auth.check ? 'Perfil' : 'Login'}>
            <i className="bi bi-person"></i>
          </StyledMainLayoutHeaderProfile>

          <StyledMainLayoutHeaderButton
            $badge={state.items.length}
            data-bs-toggle="offcanvas"
            data-bs-target="#cart-offcanvas"
            title="Carrinho"
          >
            <i className="bi bi-cart"></i>
          </StyledMainLayoutHeaderButton>
        </div>
      </StyledMainLayoutHeaderContainer>
    </StyledMainLayoutHeader>
  );
};

export default MainLayoutHeader;
