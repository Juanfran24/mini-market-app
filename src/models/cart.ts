import { Product } from "./product";

export interface Cart {
  items: ItemProduct[];
  totalCost: number;
}

export interface ItemProduct {
  product: Product;
  quantity: number;
}