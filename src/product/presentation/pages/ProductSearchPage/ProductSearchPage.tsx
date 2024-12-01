import {useState} from "react";
import {useLoaderData, useNavigate} from "react-router-dom";

// Types
import type {Product} from "@modules/product/types";
import type {ProductSearchPageLoaderData} from "@modules/product/data/loaders/ProductSearchPageLoader";

// Components
import Input from "@common/presentation/components/atoms/Input";
import Each from "@common/presentation/components/atoms/Each";
import ProductCard from "@modules/product/presentation/components/ProductCard";

// Styled Components
import {StyledProductSearchIllustration} from "./ProductSearchPage.styles";

const ProductSearchPage = () => {
  const {products} = useLoaderData() as ProductSearchPageLoaderData;
  const params = new URLSearchParams(location.search);
  const [search, setSearch] = useState<string>(params.get("search") ?? '');
  const navigate = useNavigate();

  const filtered = products.filter(product => {
    return product.name.toLowerCase().includes(search.toLowerCase());
  })

  const handleGoToProductPage = (product: Product) => {
    navigate(`/products/${product.id}`);
  }

  return (
    <div className="container py-3 d-flex flex-column">
      <Input
        className="mb-3"
        placeholder="Busque por produtos"
        onChange={e => setSearch(e.target.value)}
        value={search}
      />

      <div className="row g-2">
        {search.length >= 2 ? (
          filtered?.length > 0 ? (
            <Each data={filtered} render={product => (
              <div className="col-12">
                <ProductCard variant="small" product={product} onClick={() => handleGoToProductPage(product)}/>
              </div>
            )}/>
          ) : (
            <h6 className="text-center">Nenhum produto encontrado</h6>
          )
        ) : (
          <StyledProductSearchIllustration src="/search-ilustration.png" className="my-4" alt="Search ilustration"/>
        )}
      </div>
    </div>
  )
}

export default ProductSearchPage;