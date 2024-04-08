import { db } from "./db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({ where: { email } });
    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string | undefined) => {
  try {
    const user = await db.user.findUnique({ where: { id } });
    return user;
  } catch {
    return null;
  }
};

export const getCategoryByName = async (name: string | undefined) => {
  try {
    const category = await db.carCategory.findUnique({ where: { name } });
    return category;
  } catch {
    return null;
  }
};
