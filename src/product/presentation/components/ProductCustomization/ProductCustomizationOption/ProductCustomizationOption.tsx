// Types
import type {ProductCustomizationOptionProps} from "./ProductCustomizationOption.types";
import type {MouseEvent} from "react";

// Utils
import {formatCurrency} from "@modules/product/domain/utils/money";

// Styled components
import {
  StyledProductCustomizationOption,
  StyledProductCustomizationOptionCheck,
  StyledProductCustomizationOptionLabel,
  StyledProductCustomizationOptionName,
  StyledProductCustomizationOptionPrice,
  StyledProductCustomizationOptionRadio
} from "./ProductCustomizationOption.styles";

const ProductCustomizationOption = ({ option, multiple, onChange, ...rest }: ProductCustomizationOptionProps) => {
  const handleOnClick = (ev: MouseEvent<HTMLInputElement>) => {
    ev.preventDefault();
    onChange?.(option);
  };

  return (
    <StyledProductCustomizationOption>
      <StyledProductCustomizationOptionLabel htmlFor={`option-${option.id}`}>
        <StyledProductCustomizationOptionName>{option.name}</StyledProductCustomizationOptionName>
        {option.priceModifier !== 0 && (
          <StyledProductCustomizationOptionPrice>{formatCurrency(option.priceModifier)}</StyledProductCustomizationOptionPrice>
        )}
      </StyledProductCustomizationOptionLabel>

      {multiple ? (
        <StyledProductCustomizationOptionCheck onClick={handleOnClick} {...rest}/>
      ) : (
        <StyledProductCustomizationOptionRadio onClick={handleOnClick} {...rest}/>
      )}
    </StyledProductCustomizationOption>
  );
};

export default ProductCustomizationOption;
