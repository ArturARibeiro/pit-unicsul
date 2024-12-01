import {useLoaderData, useNavigate} from "react-router-dom";

// Types
import type {Product} from "@modules/product/types";
import type {CategoryPageData} from "./CategoryPage.types";

// Components
import Each from "@common/presentation/components/atoms/Each";
import ProductCard from "@modules/product/presentation/components/ProductCard";

// Styled components
import {StyledCategoryPageBanner, StyledCategoryPageTitle} from "./CategoryPage.styles";

const CategoryPage = () => {
  const {category, products} = useLoaderData() as CategoryPageData;
  const navigate = useNavigate();

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
          <Each data={products} render={product => (
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