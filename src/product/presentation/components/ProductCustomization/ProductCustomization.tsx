import {useEffect, useState} from "react";

// Types
import type {ProductCustomizationProps} from "./ProductCustomization.types.ts";
import type {CartCustomization} from "@modules/cart/types";

// Components
import ProductCustomizationOption from "./ProductCustomizationOption";
import Each from "@modules/common/presentation/components/atoms/Each";

// Styled components
import {
  StyledProductCustomization,
  StyledProductCustomizationList,
  StyledProductCustomizationName,
} from "./ProductCustomization.styles.ts";

const ProductCustomization = ({customization, onChange}: ProductCustomizationProps) => {
  const [cartCustomization, setCartCustomization] = useState<CartCustomization>({
    customizationId: customization.id,
    options: [],
  });

  const handleSelectOption = (optionId: string) => {
    setCartCustomization((prev) => {
      const isMultiple = customization.type === 'multiple';
      const selectedOptions = prev.options;
      const optionExists = selectedOptions.some(opt => opt.optionId === optionId);
      const maxSelections = customization.max_selections ?? Infinity;

      if (isMultiple) {
        if (optionExists) {
          const updatedOptions = selectedOptions.filter(opt => opt.optionId !== optionId);
          return {...prev, options: updatedOptions};
        } else if (selectedOptions.length < maxSelections) {
          const updatedOptions = [...selectedOptions, {optionId}];
          return {...prev, options: updatedOptions};
        } else {
          return prev;
        }
      } else {
        return optionExists
          ? {...prev, options: []}
          : {...prev, options: [{optionId}]};
      }
    });
  };

  useEffect(() => {
    onChange?.(cartCustomization);
  }, [cartCustomization, onChange]);

  return (
    <StyledProductCustomization>
      <StyledProductCustomizationName>
        {customization.name}
        {customization.is_required && <small>Obrigatório</small>}
      </StyledProductCustomizationName>

      <StyledProductCustomizationList>
        <Each
          data={customization.options}
          render={(option) => (
            <ProductCustomizationOption
              option={option}
              multiple={customization.type === "multiple"}
              required={customization.is_required}
              checked={cartCustomization.options.some((opt) => opt.optionId === option.id)}
              onChange={() => handleSelectOption(option.id)}
              disabled={
                customization.type === "multiple" &&
                cartCustomization.options.length >= (customization.max_selections ?? Infinity) &&
                !cartCustomization.options.some((opt) => opt.optionId === option.id)
              }
            />
          )}
        />
      </StyledProductCustomizationList>
    </StyledProductCustomization>
  );
};

export default ProductCustomization;
