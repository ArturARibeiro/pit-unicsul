// Types
import type {ProductCustomizationProps} from "./ProductCustomization.types.ts";

// Components
import ProductCustomizationOption from "./ProductCustomizationOption";
import Each from "@modules/common/presentation/components/atoms/Each";

// Styled components
import {
  StyledProductCustomization,
  StyledProductCustomizationList,
  StyledProductCustomizationName
} from "./ProductCustomization.styles.ts";

const ProductCustomization = ({customization}: ProductCustomizationProps) => {
  return (
    <StyledProductCustomization>
      <StyledProductCustomizationName>
        {customization.name}

        {customization.isRequired && (
          <small>Obrigatório</small>
        )}
      </StyledProductCustomizationName>

      <StyledProductCustomizationList>
        <Each data={customization.options} render={option => (
          <ProductCustomizationOption
            option={option}
            multiple={customization.type === 'multiple'}
            required={customization.isRequired}
          />
        )}/>
      </StyledProductCustomizationList>
    </StyledProductCustomization>
  );
}

export default ProductCustomization;
