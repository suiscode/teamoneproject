export interface CarItem {
  id: string;
  name: string;
  description: string;
  type: string;
  img: string[];
  price: number;
  salePrice?: number | null;
  gasoline: number;
  steering: "MANUAL" | "AUTO";
  capacity: number;
  category?: CategoryItem | null;
  categoryId?: string | null;
  reviews?: Review[] | null;
}

export interface CategoryItem {
  id: string;
  name: string;
  cars: CarItem[] | null;
}

export interface Review {
  id: string;
  car: CarItem;
  starRating: number;
  comment?: string | null;
}

export interface SessionInterface {
  expires: string;
  user: UserInterface;
}

export interface UserInterface {
  email: string;
  id: string;
  image?: string;
  name: string;
  role: string;
}
