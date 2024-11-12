import {Link, useNavigate} from "react-router-dom";

// Types
import type {Product} from "@modules/product/types";

// Mocks
import products from "@modules/product/data/mocks/products.ts";

// Components
import ProductCard from "@modules/product/presentation/components/ProductCard";
import Each from "@common/presentation/components/atoms/Each";

// Styled Components
import {StyledLandingPageCategory} from "./LandingPage.styles";


const LandingPage = () => {
  const navigate = useNavigate();

  const promotions = products.filter(p => p.promotionPrice).splice(0, 12);

  const favorites = products.sort((a, b) => b.orderCount - a.orderCount);


  const handleOpenProductPage = (product: Product) => {
    navigate(`/products/${product.id}`);
  }

  return <div className="px-0 py-3">
    <section className="container mb-4">
      <div className="d-inline-flex justify-content-between align-items-center w-100 mb-3">
        <h4 className="m-0">Categorias</h4>
        <Link className="text-decoration-none" to="/categories">Ver todas</Link>
      </div>

      <div className="row">
        <div className="col-3 d-flex flex-column align-items-center gap-2">
          <StyledLandingPageCategory>
            <picture className="w-100 h-100">
              <source srcSet="/categorias/paes.png" media="(min-width: 768px)"/>
              <img srcSet="/categorias/icones/pao.png" alt="Pães"/>
            </picture>
          </StyledLandingPageCategory>
          Pães
        </div>
        <div className="col-3 d-flex flex-column align-items-center gap-2">
          <StyledLandingPageCategory>
            <picture className="w-100 h-100">
              <source srcSet="/categorias/bolos.png" media="(min-width: 768px)"/>
              <img src="/categorias/icones/bolo.png" alt="Bolos"/>
            </picture>
          </StyledLandingPageCategory>
          Bolos
        </div>
        <div className="col-3 d-flex flex-column align-items-center gap-2">
          <StyledLandingPageCategory>
            <picture className="w-100 h-100">
              <source srcSet="/categorias/croissants.png" media="(min-width: 768px)"/>
              <img src="/categorias/icones/croissant.png" alt="Croissants"/>
            </picture>
          </StyledLandingPageCategory>
          Croissants
        </div>
        <div className="col-3 d-flex flex-column align-items-center gap-2">
          <StyledLandingPageCategory>
            <picture className="w-100 h-100">
              <source srcSet="/categorias/promocoes.png" media="(min-width: 768px)"/>
              <img src="/categorias/icones/donut.png" alt="Donuts"/>
            </picture>
          </StyledLandingPageCategory>
          Donuts
        </div>
      </div>
    </section>

    <section className="container mb-2">
      <h4>Em promoção</h4>

      <div className="row flex-nowrap overflow-x-auto flex-md-wrap g-2" style={{scrollbarWidth: "none" }}>
        <Each data={promotions} render={product => (
          <div className="col-5 col-sm-4 col-md-3 col-lg-2">
            <ProductCard product={product} className="mb-3" onClick={() => handleOpenProductPage(product)}/>
          </div>
        )}/>
      </div>
    </section>

    <section className="container">
      <h4>Mais pedidos</h4>

      <div className="row g-2">
        <Each data={favorites} render={product => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <ProductCard variant="small" product={product} className="mb-3" onClick={() => handleOpenProductPage(product)}/>
          </div>
        )}/>
      </div>
    </section>

  </div>
}

export default LandingPage;