import {useNavigate, useParams} from "react-router-dom";

// Types
import type {CategoryPageParams} from "./CategoryPage.types";
import type {Product} from "@modules/product/types";

// Mocks
import categories from "@modules/product/data/mocks/categories.ts";
import products from "@modules/product/data/mocks/products.ts";

// Components
import Each from "@common/presentation/components/atoms/Each";
import ProductCard from "@modules/product/presentation/components/ProductCard";

// Styled components
import {StyledCategoryPageBanner, StyledCategoryPageTitle} from "./CategoryPage.styles";

const CategoryPage = () => {
  const {slug} = useParams<CategoryPageParams>();
  const navigate = useNavigate();
  const category = categories.find(c => c.slug === slug);
  const filtered = products.filter(p => p.categories.includes(slug!));

  const handleGoToProductPage = (product: Product) => {
    navigate(`/products/${product.id}`)
  }

  return (
    <>
      {category && (
        <StyledCategoryPageBanner>
          <img src={category.image} alt={category.name}/>

          <StyledCategoryPageTitle
            className="container"
            children={category.name}
          />
        </StyledCategoryPageBanner>
      )}
      <div className="container py-3 py-md-5">
        <div className="row g-4">
          <Each data={filtered} render={product => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <ProductCard
                variant="small"
                product={product}
                onClick={() => handleGoToProductPage(product)}
              />
            </div>
          )}/>
        </div>
      </div>
    </>
  )
}

export default CategoryPage;