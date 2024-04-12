import Link from "next/link";
import React from "react";

function HomeHeader() {
  return (
    <div className="fixed top-0 z-50 bg-black h-[50px] items-center w-full flex justify-center">
      <div className="flex justify-between w-full  mx-[10%]">
        <div className="flex gap-10">
          <p>CAR RENT</p>
          <Link href="/cars" className="underline">
            Explore cars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
