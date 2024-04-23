import React from "react";
import { auth } from "../../../auth";
import { fetchUserOrder } from "../fetch";

async function ProfilePage() {
  const session = await auth();

  const orders = await fetchUserOrder(session?.user.id);
  console.log(orders);

  return (
    <div>
      <h1>{JSON.stringify(orders)}</h1>
    </div>
  );
}

export default ProfilePage;
