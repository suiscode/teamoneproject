import React from "react";
import { fetchCategory, getCategory } from "@/app/fetch";
import { auth } from "../../../auth";
import ImageTest from "./carlist/Testdemo";

async function page() {
  const session = await auth();

  return (
    <div className="flex gap-4 p-8 border-2 w-full">
      {/* <ImageTest/> */}
    </div>
  );
}

export default page;
