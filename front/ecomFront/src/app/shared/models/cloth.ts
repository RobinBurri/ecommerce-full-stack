export type ClothOverview = {
  id: number;
  brand: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
};

export type ClothDetails = {
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
