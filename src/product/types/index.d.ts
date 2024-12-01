export type ProductCategory = {
  id: string;
  slug: string;
  name: string;
  image: string;
};

export type Product = {
  id: string; // UUIDv4
  sku: string;
  name: string;
  picture?: string;
  base_price: number;
  promotion_price?: number;
  description: string;
  rating: number;
  unit: 'uni' | 'kg' | 'g';
  order_count: number;
  quantity_gap: number;
  tags: string[];
  categories: ProductCategory['slug'][];
  customizations: ProductCustomization[];
};

export type ProductCustomization = {
  id: string; // UUIDv4
  name: string;
  type: 'single' | 'multiple';
  is_required: boolean;
  max_selections?: number;
  options: ProductCustomizationOption[];
};

export type ProductCustomizationOption = {
  id: string; // UUIDv4
  name: string;
  price_modifier: number;
};