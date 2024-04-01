import { connectToDB } from "./utils";
import { Car, CarCategory } from "./models";

export const fetchCars = async () => {
  try {
    connectToDB();
    const users = await Car.find();
    return users;
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
  try {
    connectToDB();
    const category = await CarCategory.find({ name: name }).populate('cars');
    return category;
  } catch (e) {
    console.log(e);
  }
};
