import { connectToDB } from "./utils";
import { Car, CarCategory } from "./models";
import { db } from "@/lib/db";

export const fetchCars = async () => {
  try {
    const cars = await db.car.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return cars;
  } catch (e) {
    console.log(e);
  }
};

export const getOneCar = async (id) => {
  try {
    const car = await db.car.findUnique({
      where: {
        id,
      },
    });
    return car;
  } catch (e) {
    console.log(e);
  }
};

export const addCategory = async () => {
  try {
    connectToDB();
    const category = await CarCategory.find();
    return category;
  } catch (e) {
    console.log(e);
  }
};

export const fetchCategory = async () => {
  try {
    connectToDB();
    const category = await CarCategory.find();
    return category;
  } catch (e) {
    console.log(e);
  }
};

export const getCategory = async (name) => {
  if (!name) {
    try {
      const cars = await db.carCategory.findMany({
        orderBy: {
          id: "desc",
        },
      });
      console.log(cars, "from cars");
      return { data: cars };
    } catch (e) {
      console.log(e);
    }
  } else {
    try {
      const category = await db.carCategory.findUnique({
        where: { name },
        include: {
          cars: {
            orderBy: {
              id: "desc",
            },
          },
        },
      });
      return category;
    } catch (e) {
      console.log(e);
    }
  }
};
