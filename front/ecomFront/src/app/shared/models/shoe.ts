export type ShoeOverview = {
  id: number;
  brand: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
};

export type ShoeDetails = {
  id: number;
  brand: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  color: string[];
  sizes: string[];
  material: string[];
  country: string;
};
