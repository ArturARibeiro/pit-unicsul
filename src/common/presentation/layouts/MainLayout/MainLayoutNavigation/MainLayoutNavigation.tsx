import {
  StyledMainLayoutNavigation,
  StyledMainLayoutNavigationMenu,
  StyledMainLayoutNavigationMenuItem
} from "./MainLayoutNavigation.styles";

const MainLayoutNavigation = () => {

  return (
    <StyledMainLayoutNavigation>
      <StyledMainLayoutNavigationMenu>
        <StyledMainLayoutNavigationMenuItem aria-selected>
          <i className="bi bi-house-fill"></i>
          Início
        </StyledMainLayoutNavigationMenuItem>
        <StyledMainLayoutNavigationMenuItem>
          <i className="bi bi-search"></i>
          Buscar
        </StyledMainLayoutNavigationMenuItem>
        <StyledMainLayoutNavigationMenuItem>
          <i className="bi bi-receipt"></i>
          Pedidos
        </StyledMainLayoutNavigationMenuItem>
        <StyledMainLayoutNavigationMenuItem>
          <i className="bi bi-person"></i>
          Perfil
        </StyledMainLayoutNavigationMenuItem>
      </StyledMainLayoutNavigationMenu>
    </StyledMainLayoutNavigation>
  )
}

export default MainLayoutNavigation;