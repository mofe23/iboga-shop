export interface Sku {
  uuid: string;
  name: string;
  image: string | null;
  gross: string;
  net: string;
  currency: string;
  unit: string;
  caption: string;
}

export interface Product {
  uuid: string;
  id: number;
  name: string;
  caption: string;
  description: string;
  skus: Sku[];
  default_sku: Sku | null;
}

export interface CartItem {
  skuUuid: string;
  productName: string;
  skuName: string;
  gross: string;
  currency: string;
  quantity: number;
}

export const CART_KEY = 'iboga-cart';
