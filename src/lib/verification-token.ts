import { db } from "./db";

export const getVerificationByEmail = async (email: string) => {
  try {
    const verificationToken = await db.verificationToken.findFirst({
      where: { email },
    });
    return verificationToken;
  } catch (e) {
    return;
  }
};

export const getVerificationByToken = async (token: string) => {
    try {
      const verificationToken = await db.verificationToken.findUnique({
        where: { token },
      });
      return verificationToken;
    } catch (e) {
      return;
    }
  };
  