import { fetchAllOrder } from "@/app/fetch";
import OrderCart from "./OrderCart";

async function page() {
  const order = await fetchAllOrder();

  return (
    <div className="flex justify-between p-8  flex-row-reverse border w-full py-6">
      <OrderCart order={order?.[0]} />
    </div>
  );
}

export default page;
