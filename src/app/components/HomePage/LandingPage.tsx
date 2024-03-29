import React from "react";
import CarModel from "./CarModel";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="w-[70%] h-[70%] relative">
      <div className="bg-[#3563e8] w-[40%] h-[85%] absolute right-0 rounded-full"></div>
      <div className="bg-[#3563e8] w-[20%] h-[40%] absolute right-0 top-0 "></div>
      <div className="w-[40%] h-[80%] text-[#000]  p-10 flex flex-col justify-between rounded-[20px] ">
        <div className="text-[55px] font-bold-900 ">
          <p>Rent the luxury. Own the thrill</p>
        </div>
        <p>
          Rent now and we can provide you the most comfortable and the most
          suitable car as you want. Experience the ultimate freedom of choice
          with us - tailor your adventure by choosing from our premium fleet of
          vehicles.
        </p>
        <Link href="/category">
          <button className="text-[#fff] font-bold bg-[#3563e8] text-md rounded-[20px] px-4 py-2 w-52">
            Explore now
          </button>
        </Link>
        <div className="bg-[#3563e8] w-[20%] h-[43%] opacity-10 rounded-full absolute left-0 bottom-[45%]"></div>
      </div>
      <div className="w-[60%] h-full absolute right-0 top-0">
        <CarModel />
      </div>
    </div>
  );
};

export default LandingPage;
