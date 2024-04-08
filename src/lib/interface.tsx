export interface CarItem {
  id: string;
  name: string;
  description: string;
  type: string;
  img: string[];
  price: number;
  salePrice?: number | null;
  gasoline: string;
  steering: "manual" | "auto"; // Assuming you're using an enum for steering type
  capacity: number;
  category?: CategoryItem | null;
  categoryId?: string | null;
  reviews?: Review[] | null; // Assuming you have defined a Review interface
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
