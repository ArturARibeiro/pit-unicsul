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

  const promotions = products.filter(p => p.promotionPrice);

  const favorites = products.sort((a, b) => b.orderCount - a.orderCount);


  const handleOpenProductPage = (product: Product) => {
    navigate(`/products/${product.id}`);
  }

  return <div className="container px-3 py-3">

    <section className="mb-4">
      <div className="d-inline-flex justify-content-between align-items-center w-100 mb-3">
        <h4 className="m-0">Categorias</h4>
        <Link className="text-decoration-none" to="/categories">Ver todas</Link>
      </div>

      <div className="row">
        <div className="col-3 d-flex flex-column align-items-center gap-2">
          <StyledLandingPageCategory>
            <img src="/categorias/icones/pao.png" alt="Pães"/>
          </StyledLandingPageCategory>
          Pães
        </div>
        <div className="col-3 d-flex flex-column align-items-center gap-2">
          <StyledLandingPageCategory>
            <img src="/categorias/icones/bolo.png" alt="Bolos"/>
          </StyledLandingPageCategory>
          Bolos
        </div>
        <div className="col-3 d-flex flex-column align-items-center gap-2">
          <StyledLandingPageCategory>
            <img src="/categorias/icones/croissant.png" alt="Croissants"/>
          </StyledLandingPageCategory>
          Croissants
        </div>
        <div className="col-3 d-flex flex-column align-items-center gap-2">
          <StyledLandingPageCategory>
            <img src="/categorias/icones/donut.png" alt="Donuts"/>
          </StyledLandingPageCategory>
          Donuts
        </div>
      </div>

    </section>

    <section>
      <h4>Em promoção</h4>

      <div className="d-flex gap-2 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
        <Each data={promotions} render={product => (
          <ProductCard product={product} className="mb-3" onClick={() => handleOpenProductPage(product)}/>
        )}/>
      </div>
    </section>

    <section>
      <h4>Mais pedidos</h4>

      <Each data={favorites} render={product => (
        <ProductCard variant="small" product={product} className="mb-3" onClick={() => handleOpenProductPage(product)}/>
      )}/>
    </section>

  </div>
}

export default LandingPage;