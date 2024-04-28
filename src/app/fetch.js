import { connectToDB } from "./utils";
import { Car, CarCategory } from "./models";
import { db } from "@/lib/db";
import { algoliaIndex } from "@/lib/algolia";

export const fetchCars = async (input) => {
  try {
    const { hits } = await algoliaIndex.search(input);

    return hits;
  } catch (e) {
    console.log(e);
  }
};

export const getBookmarkCount = async (id) => {
  try {
    const userBookmarkCount = await db.bookmark.count({
      where: {
        userId: id,
      },
    });
    return userBookmarkCount;
  } catch (e) {
    console.log(e);
  }
};

export const fetchSortedCars = async (type) => {
  try {
    const sortCars = await db.car.findMany({
      where: {
        type,
      },
    });
    return sortCars;
  } catch (e) {
    console.log(e);
  }
};

export const fetchUserOrder = async (userId) => {
  try {
    const userOrder = await db.order.findMany({
      where: {
        userId: userId,
      },
      include: {
        user: true,
        car: true,
      },
    });
    return userOrder;
  } catch (e) {
    console.log(e);
  }
};

export const fetchAllOrder = async () => {
  try {
    const allOrder = await db.order.findMany({
      include: {
        user: true, // Include user details
        car: true, // Include car details
      },
    });
    return allOrder;
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
    const categoryFind = await db.carCategory.findMany({
      orderBy: {
        id: "desc",
      },
    });
    return categoryFind;
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

export const getAllFavoritedItem = async (userId) => {
  const userBookmarkedCars = await db.bookmark.findMany({
    where: {
      userId: userId,
    },
    include: {
      car: true,
    },
  });
  const cars = userBookmarkedCars.map((bookmark) => bookmark.car);
  return cars;
};
