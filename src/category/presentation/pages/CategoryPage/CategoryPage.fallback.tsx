// Components
import Each from "@common/presentation/components/atoms/Each";
import {ProductCardFallback} from "@modules/product/presentation/components/ProductCard";

// Styled components
import {StyledCategoryPageBanner} from "./CategoryPage.styles";

const CategoryPage = () => {
  return (
    <div className="placeholder-wave">
      <StyledCategoryPageBanner className="placeholder"/>
      <div className="container py-3 py-md-5">
        <div className="row g-4">
          <Each data={Array.from(Array(10))} render={() => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <ProductCardFallback />
            </div>
          )}/>
        </div>
      </div>
    </div>
  )
}

export default CategoryPage;