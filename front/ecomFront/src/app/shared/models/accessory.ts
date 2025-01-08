export type AccessoryOverview = {
  id: number;
  brand: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
};

export type AccessoryDetails = {
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
