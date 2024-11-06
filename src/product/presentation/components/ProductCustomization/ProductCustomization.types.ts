import type {ProductCustomization} from "@modules/product/types";
import type {CartCustomization} from "@modules/cart/types";

export interface ProductCustomizationProps {
  customization: ProductCustomization;
  selections?: CartCustomization
}