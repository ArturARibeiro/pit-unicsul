import {ScrollRestoration} from "react-router-dom";

// Styled components
import {
  StyledProductPage,
  StyledProductPageDescription,
  StyledProductPageInfo,
  StyledProductPageName,
  StyledProductPageNavigation,
  StyledProductPageNavigationButton,
  StyledProductPagePicture,
  StyledProductPageSku,
} from "./ProductPage.styles";

const ProductPageFallback = () => {
  return <div className="container py-md-4 px-0 placeholder-wave">
    <ScrollRestoration />

    <StyledProductPageNavigation>
      <StyledProductPageNavigationButton className="placeholder"/>
      <StyledProductPageNavigationButton className="placeholder"/>
    </StyledProductPageNavigation>

    <StyledProductPage>
      <StyledProductPagePicture className="placeholder"/>

      <div className="d-flex flex-column">
        <StyledProductPageInfo className="px-3">
          <StyledProductPageSku className="placeholder">Lorem ipsum</StyledProductPageSku>
          <StyledProductPageName className="placeholder">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </StyledProductPageName>
          <StyledProductPageDescription className="placeholder">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid aspernatur corporis distinctio dolore
            dolores enim expedita facilis laboriosam magnam modi necessitatibus nisi, obcaecati, perferendis
            perspiciatis quis ratione sit velit!
          </StyledProductPageDescription>
        </StyledProductPageInfo>
      </div>
    </StyledProductPage>
  </div>;
};

export default ProductPageFallback;
