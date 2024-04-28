import { fetchUserOrder } from "@/app/fetch";
import { auth } from "../../../../auth";
import Dashboard from "./Dashboard";

const DashboardPage = async () => {
  const session = await auth();
  const orders = await fetchUserOrder(session?.user.id);

  return <Dashboard orders={orders as any} />;
};

export default DashboardPage;
