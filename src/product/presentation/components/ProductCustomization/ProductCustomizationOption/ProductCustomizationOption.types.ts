import type {ProductCustomizationOption} from "@modules/product/types";

export interface ProductCustomizationOptionProps {
  option: ProductCustomizationOption;
  checked?: boolean;
  multiple?: boolean;
  required?: boolean;
  disabled?: boolean;
  onChange?: (option: ProductCustomizationOption) => void;
}