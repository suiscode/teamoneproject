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

export interface DurationInterface {
  from: Date;
  to: Date;
}
export interface OrderInterface {
  id: string;
  duration: DurationInterface;
  pickupLocation: string;
  dropLocation: string[];
  amount: number;
  userId: string;
  carId: string;
  user: UserInterface;
}

export interface CategoryItem {
  id: string;
  name: string;
  cars: CarItem[] | null;
}

export interface Review {
  id: string;
  carId: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  starRating: number;
  User: UserInterface;
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
  firstName: string;
  lastName: string;
  address: string | null;
  role: string;
}
