import {Product, ProductCustomization, ProductCustomizationOption} from "@modules/product/types";

export type Cart = {
  items: CartItem[];
};

export type CartItem = {
  id?: string;
  product: Product;
  quantity: number;
  amount: number;
  notes?: string;
  selectedCustomizations: CartCustomization[];
};

export type CartCustomization = {
  customizationId: ProductCustomization['id'];
  options: CartCustomizationOption[];
};

export type CartCustomizationOption = {
  optionId: ProductCustomizationOption['id'];
};
