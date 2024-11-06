import ProductCard from "@modules/product/presentation/components/ProductCard";
import Each from "@common/presentation/components/atoms/Each";
import products from "@modules/product/data/mocks/products.ts";
import {Product} from "@modules/product/types";
import {useNavigate} from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleOpenProductPage = (product: Product) => {
    navigate(`/products/${product.id}`);
  }

  return <div className="container px-3 py-3">
    <h1>Início</h1>

    <Each data={products} render={product => (
      <ProductCard product={product} className="mb-3" onClick={() => handleOpenProductPage(product)}/>
    )}/>

  </div>
}

export default LandingPage;