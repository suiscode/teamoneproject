import React from "react";
import CarModel from "./CarModel";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="w-full items-center flex-col flex h-screen bg-black ">
        <p className="font-bold mt-[200px] text-[100px]">Rent the luxury. Own the thrill</p>
        <div className="h-full  w-full absolute">
        <CarModel />
        </div>
        <button className="absolute text-xl bottom-[300px] right-[400px] border-2 rounded-xl px-4 py-2 hover:bg-white hover:text-black hover:border-black">Order now</button>
    </div>
  );
};

export default LandingPage;

{
  /* <p>
          Rent now and we can provide you the most comfortable and the most
          suitable car as you want. Experience the ultimate freedom of choice
          with us - tailor your adventure by choosing from our premium fleet of
          vehicles.
        </p> */
}
