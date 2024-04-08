import { auth } from "../../auth";

export const useCurrentRole = async () => {
  const session = await auth();

  return session?.user.role;
};
