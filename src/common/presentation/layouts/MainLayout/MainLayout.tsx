import {Outlet} from "react-router-dom";

// Types
import type {MainLayoutProps} from "./MainLayout.types";

// Components
import MainLayoutHeader from "./MainLayoutHeader";
import MainLayoutNavigation from "./MainLayoutNavigation";
import {StyledMainLayout, StyledMainLayoutContent} from "@common/presentation/layouts/MainLayout/MainLayout.styles.ts";

const MainLayout = (props: MainLayoutProps) => {
  return (
    <StyledMainLayout>
      <MainLayoutHeader />
      <StyledMainLayoutContent {...props}>
        <Outlet />
      </StyledMainLayoutContent>
      <MainLayoutNavigation/>
    </StyledMainLayout>
  )
}

export default MainLayout;