export type ProductModel = {
  id: number;
  name: string;
};

export type OrderItemModel = {
  id: number;
  product: ProductModel;
  price: number;
};
