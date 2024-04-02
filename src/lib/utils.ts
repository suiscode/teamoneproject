import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { MongoClient } from "mongodb";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// if (!process.env.MONGO) {
//   throw new Error("MONGODB_URI environment variable is not defined");
// }

// const uri: string = process.env.MONGO;

// const options = {};

// let client;
// let clientPromise: Promise<MongoClient>;

// client = new MongoClient(uri, options);
// clientPromise = client.connect();

// export default clientPromise;
