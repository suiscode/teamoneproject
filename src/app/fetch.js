import { connectToDB } from "./utils";
import { Car, CarCategory } from "./models";

export const fetchCars = async () => {
  try {
    connectToDB();
    const cars = await Car.find();
    return cars;
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
      connectToDB();
      const cars = await Car.find();
      return {data:cars};
    } catch (e) {
      console.log(e);
    }
  } else {
    try {
      connectToDB();
      const category = await CarCategory.findOne({ name: name }).populate(
        "cars"
      );
      return category;
    } catch (e) {
      console.log(e);
    }
  }
};
