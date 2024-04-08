import React from "react";
import ImageTest from "./carlist/Testdemo";
import { useCurrentRole } from "@/hooks/use-current-role";

async function page() {
  return (
    <div className="flex gap-4 p-8 border-2 w-full">
      {/* <h1>{role}</h1> */}
      {/* <ImageTest/> */}
    </div>
  );
}

export default page;
