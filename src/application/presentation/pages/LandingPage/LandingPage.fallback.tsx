// Components
import {ProductCardFallback} from "@modules/product/presentation/components/ProductCard";
import Search from "@modules/application/presentation/components/Search";
import Each from "@common/presentation/components/atoms/Each";

// Styled Components
import {
  StyledLandingPageCategory,
  StyledLandingPageSearchSection,
  StyledLandingPageSearchTitle
} from "./LandingPage.styles";

const LandingPage = () => {
  return (
    <div className="placeholder-wave">
      <StyledLandingPageSearchSection>
        <StyledLandingPageSearchTitle className="placeholder">
          O que você está procurando?
        </StyledLandingPageSearchTitle>
        <Search placeholder="Buscar" disabled/>
      </StyledLandingPageSearchSection>

      <section className="container my-4">
        <div className="row">
          <div className="col-3 d-flex flex-column align-items-center gap-2">
            <StyledLandingPageCategory className="placeholder"/>
          </div>
          <div className="col-3 d-flex flex-column align-items-center gap-2">
            <StyledLandingPageCategory className="placeholder"/>
          </div>
          <div className="col-3 d-flex flex-column align-items-center gap-2">
            <StyledLandingPageCategory className="placeholder"/>
          </div>
          <div className="col-3 d-flex flex-column align-items-center gap-2">
            <StyledLandingPageCategory className="placeholder"/>
          </div>
        </div>
      </section>

      <section className="container my-4">
        <h5>Em promoção</h5>

        <div className="row flex-nowrap overflow-x-auto flex-md-wrap g-2" style={{scrollbarWidth: "none"}}>
          <Each data={Array.from(Array(10))} render={() => (
            <div className="col-5 col-sm-4 col-md-3 col-lg-2">
              <ProductCardFallback />
            </div>
          )}/>
        </div>
      </section>

      <section className="container my-4">
        <h5>Mais pedidos</h5>

        <div className="row g-2">
          <Each data={Array.from(Array(20))} render={() => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <ProductCardFallback variant="small"/>
            </div>
          )}/>
        </div>
      </section>
    </div>
  )
}

export default LandingPage;