/**
 * Shape of a product returned by the warehouse API
 * (https://6776992512a55a9a7d0c4868.mockapi.io/products).
 */
export interface Product {
  id: number;
  productName: string;
  productVariant: string;
  productPrice: number;
}
