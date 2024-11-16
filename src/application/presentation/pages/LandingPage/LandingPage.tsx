import {useNavigate} from "react-router-dom";

// Types
import type {Product} from "@modules/product/types";

// Mocks
import products from "@modules/product/data/mocks/products.ts";

// Components
import Search from "@modules/application/presentation/components/Search";
import ProductCard from "@modules/product/presentation/components/ProductCard";
import Each from "@common/presentation/components/atoms/Each";

// Styled Components
import {
  StyledLandingPageCategory,
  StyledLandingPageCategoryTitle,
  StyledLandingPageSearchSection,
  StyledLandingPageSearchTitle
} from "./LandingPage.styles";

const LandingPage = () => {
  const navigate = useNavigate();

  const promotions = products.filter(p => p.promotionPrice).splice(0, 6);

  const favorites = products.sort((a, b) => b.orderCount - a.orderCount);

  const handleOpenProductPage = (product: Product) => {
    navigate(`/products/${product.id}`);
  }

  const handleGoToCategoryPage = (category: string) => {
    navigate(`/categories/${category}`);
  }

  return (
    <div>
      <StyledLandingPageSearchSection>
        <StyledLandingPageSearchTitle>
          O que você está procurando?
        </StyledLandingPageSearchTitle>
        <Search placeholder="Buscar"/>
      </StyledLandingPageSearchSection>

      <section className="container my-4">
        <div className="row">
          <div className="col-3 d-flex flex-column align-items-center gap-2">
            <StyledLandingPageCategory onClick={() => handleGoToCategoryPage('breads')}>
              <picture className="w-100 h-100">
                <source srcSet="/categorias/paes.png" media="(min-width: 768px)"/>
                <img srcSet="/categorias/icones/pao.png" alt="Pães"/>
              </picture>
              <StyledLandingPageCategoryTitle children="Pães"/>
            </StyledLandingPageCategory>
          </div>
          <div className="col-3 d-flex flex-column align-items-center gap-2">
            <StyledLandingPageCategory onClick={() => handleGoToCategoryPage('cakes')}>
              <picture className="w-100 h-100">
                <source srcSet="/categorias/bolos.png" media="(min-width: 768px)"/>
                <img src="/categorias/icones/bolo.png" alt="Bolos"/>
              </picture>
              <StyledLandingPageCategoryTitle children="Bolos"/>
            </StyledLandingPageCategory>
          </div>
          <div className="col-3 d-flex flex-column align-items-center gap-2">
            <StyledLandingPageCategory onClick={() => handleGoToCategoryPage('croissants')}>
              <picture className="w-100 h-100">
                <source srcSet="/categorias/croissants.png" media="(min-width: 768px)"/>
                <img src="/categorias/icones/croissant.png" alt="Croissants"/>
              </picture>
              <StyledLandingPageCategoryTitle children="Croissants"/>
            </StyledLandingPageCategory>
          </div>
          <div className="col-3 d-flex flex-column align-items-center gap-2">
            <StyledLandingPageCategory onClick={() => handleGoToCategoryPage('donuts')}>
              <picture className="w-100 h-100">
                <source srcSet="/categorias/promocoes.png" media="(min-width: 768px)"/>
                <img src="/categorias/icones/donut.png" alt="Donuts"/>
              </picture>
              <StyledLandingPageCategoryTitle children="Donuts"/>
            </StyledLandingPageCategory>
          </div>
        </div>
      </section>

      <section className="container my-4">
        <h5>Em promoção</h5>

        <div className="row flex-nowrap overflow-x-auto flex-md-wrap g-2" style={{scrollbarWidth: "none"}}>
          <Each data={promotions} render={product => (
            <div className="col-5 col-sm-4 col-md-3 col-lg-2">
              <ProductCard product={product} className="mb-3" onClick={() => handleOpenProductPage(product)}/>
            </div>
          )}/>
        </div>
      </section>

      <section className="container my-4">
        <h5>Mais pedidos</h5>

        <div className="row g-2">
          <Each data={favorites} render={product => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <ProductCard
                variant="small"
                className="mb-3"
                product={product}
                onClick={() => handleOpenProductPage(product)}
              />
            </div>
          )}/>
        </div>
      </section>
    </div>
  )
}

export default LandingPage;