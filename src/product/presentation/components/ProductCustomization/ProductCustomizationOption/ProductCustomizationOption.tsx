// Types
import type {ProductCustomizationOptionProps} from "./ProductCustomizationOption.types";

// Utils
import {formatCurrency} from "@modules/product/domain/utils/money";

// Components
import Checkbox from "@common/presentation/components/atoms/Checkbox";
import Radio from "@common/presentation/components/atoms/Radio";

// Styled components
import {
  StyledProductCustomizationOption,
  StyledProductCustomizationOptionLabel,
  StyledProductCustomizationOptionName,
  StyledProductCustomizationOptionPrice
} from "./ProductCustomizationOption.styles";

const ProductCustomizationOption = ({ option, multiple, onChange, ...rest }: ProductCustomizationOptionProps) => {
  const handleOnChange = () => {
    onChange?.(option);
  };

  return (
    <StyledProductCustomizationOption>
      <StyledProductCustomizationOptionLabel htmlFor={`option-${option.id}`}>
        <StyledProductCustomizationOptionName children={option.name}/>
        {option.priceModifier !== 0 && (
          <StyledProductCustomizationOptionPrice children={formatCurrency(option.priceModifier)}/>
        )}
      </StyledProductCustomizationOptionLabel>

      {multiple ? (
        <Checkbox onChange={handleOnChange} id={`option-${option.id}`} {...rest}/>
      ) : (
        <Radio onChange={handleOnChange} id={`option-${option.id}`} {...rest}/>
      )}
    </StyledProductCustomizationOption>
  );
};

export default ProductCustomizationOption;
