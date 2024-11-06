export type ProductCategory = {
  slug: string;
  name: string;
  image: string;
};

export type Product = {
  id: string; // UUIDv4
  sku: string;
  name: string;
  picture?: string;
  basePrice: number;
  promotionPrice?: number;
  description: string;
  rating: number;
  unit: 'uni' | 'kg' | 'g';
  orderCount: number;
  quantityGap: number;
  tags: string[];
  categories: ProductCategory['slug'][];
  customizations: ProductCustomization[];
};

export type ProductCustomization = {
  id: string; // UUIDv4
  name: string;
  type: 'single' | 'multiple';
  isRequired: boolean;
  maxSelections?: number;
  options: ProductCustomizationOption[];
};

export type ProductCustomizationOption = {
  id: string; // UUIDv4
  name: string;
  priceModifier: number;
};