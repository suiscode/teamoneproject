"use client";
import React from "react";
import { FaCar } from "react-icons/fa";
import Image from "next/image";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { GiTeamIdea } from "react-icons/gi";
import Link from "next/link";
import { GiMountains } from "react-icons/gi";

export const ThirdPage = () => {
  return (
    <div
      id="thirdBack"
      className="w-full flex-col relative gap-[600px] py-[150px] items-center flex h-[1080px] z-40 bg-[#0b0b0b]"
    >
      <div className=" z-4 text-6xl text-[#e6e6e6] w-[900px] text-center ">
        <h1>Feel the best experience with our rental deals</h1>
      </div>
      <div className="w-[1200px] absolute h-[400px] z-40 top-[400px]">
        <Image
          src={"/redcar.webp"}
          fill
          alt="car"
          className="object-cover object-bottom"
        />
      </div>
      <Link href={"/cars"}>
        <div className=" hover:scale-[1.1]  w-full text-white px-[100px] rounded-sm py-2 duration-500 ease-in-out z-5 backdrop-blur-lg flex gap-4 items-center justify-center border">
          <p className="text-sm">Rent now</p>
        </div>
      </Link>
    </div>
  );
};

{
  /* <div className=" hover:scale-[1.1] duration-700 ease-in-out absolute z-5 w-72 h-72 backdrop-blur-xl rounded-full flex flex-col items-center justify-center left-[10%] top-[35%] border">
        <div className="text-xl flex flex-col items-center gap-3 ">
          <div className="text-3xl">
            <FaMoneyCheckDollar />
          </div>
          Deals for every budget
          <p className="text-sm">Incredible price</p>
        </div>
      </div>
      <div className="hover:scale-[1.1] duration-700 ease-in-out absolute z-5 left-[30%] bottom-5 w-72 h-72 backdrop-blur-xl rounded-full flex flex-col items-center justify-center border">
        <div className="text-xl flex flex-col items-center gap-3 text-center">
          <div className="text-3xl">
            <GiTeamIdea />
          </div>
          <p>Our team will provide your safetiness</p>
        </div>
      </div>
      <div className="hover:scale-[1.1] duration-700 transform:all absolute z-5 right-[30%] bottom-5 w-72 h-72 backdrop-blur-lg rounded-full flex flex-col items-center justify-center border">
        <div className="text-lg flex flex-col items-center text-center gap-3 p-2">
          <div className="text-3xl">
            <GiMountains />
          </div>
          <p>
            Ready for anything, from rocky mountain trails to smart city
            streets.
          </p>
        </div>
      </div> */
}
