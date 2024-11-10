import {useState} from "react";

// Types
import type {ProductCustomizationProps} from "./ProductCustomization.types.ts";
import type {CartCustomization, CartCustomizationOption} from "@modules/cart/types";

// Components
import ProductCustomizationOption from "./ProductCustomizationOption";
import Each from "@modules/common/presentation/components/atoms/Each";

// Styled components
import {
  StyledProductCustomization,
  StyledProductCustomizationList,
  StyledProductCustomizationName
} from "./ProductCustomization.styles.ts";

const ProductCustomization = ({ customization, onChange }: ProductCustomizationProps) => {
  const [cartCustomization, setCartCustomization] = useState<CartCustomization>({
    customizationId: customization.id,
    options: []
  });

  const handleSelectOption = (optionId: string) => {
    setCartCustomization(prevCustomization => {
      const isMultiple = customization.type === 'multiple';
      const selectedOptions = prevCustomization.options.map(opt => opt.optionId);

      if (selectedOptions.includes(optionId)) {
        console.log(selectedOptions);
        return {
          ...prevCustomization,
          options: prevCustomization.options.filter(opt => opt.optionId !== optionId)
        };
      }

      // Adiciona nova opção ou substitui, dependendo do tipo
      const newOptions: CartCustomizationOption[] = isMultiple
        ? [...prevCustomization.options, { optionId }]
        : [{ optionId }];

      onChange?.({
        ...prevCustomization,
        options: newOptions
      })

      return {
        ...prevCustomization,
        options: newOptions
      };
    });
  };

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
            checked={cartCustomization.options.some(opt => opt.optionId === option.id)}
            onChange={() => handleSelectOption(option.id)}
          />
        )} />
      </StyledProductCustomizationList>
    </StyledProductCustomization>
  );
};

export default ProductCustomization;
