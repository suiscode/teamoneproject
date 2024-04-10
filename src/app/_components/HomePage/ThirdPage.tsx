"use client";
import React from "react";
import { FaCar } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import Image from "next/image";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { GiTeamIdea } from "react-icons/gi";
import Link from "next/link";
import { GiMountains } from "react-icons/gi";

export const ThirdPage = () => {
  const [date, setDate] = React.useState<Date>();
  return (
    <>
      <div className="w-full flex-col relative justify-center items-center flex h-[1080px] gap-10 py-[360px] bg-[#0b0b0b]">
        <div
          id="thirdBack"
          className="w-[90%] h-[1080px] bg-[#1b1b1b] absolute z-2"
        ></div>
        <div className="absolute z-3 ">
          <Image
            src={"/redcar.webp"}
            width={1200}
            height={400}
            alt="car"
            className="rounded-full"
          />
        </div>
        <div className="absolute z-4 text-6xl top-[18%] text-[#e6e6e6] w-[900px] text-center font-mono">
          <h1>Feel the best experience with our rental deals</h1>
        </div>

        <div className=" hover:scale-[1.1] hover:duration-700 ease-in-out absolute z-5 w-72 h-72 backdrop-blur-lg rounded-full flex flex-col items-center justify-center left-[13%] bottom-[20%] border">
          <div className="text-xl flex flex-col items-center gap-3 ">
            <div className="text-3xl">
              <FaMoneyCheckDollar />
            </div>
            Deals for every budget
            <p className="text-sm">Incredible price</p>
          </div>
        </div>

        <div className="hover:scale-[1.1] hover:duration-700 ease-in-out absolute z-5 left-[33%] bottom-2 w-72 h-72 backdrop-blur-xl rounded-full flex flex-col items-center justify-center border">
          <div className="text-xl flex flex-col items-center gap-3 text-center">
            <div className="text-3xl">
              <GiTeamIdea />
            </div>
            <p>Our team will provide your safetiness</p>
          </div>
        </div>
        <div className="hover:scale-[1.1] hover:duration-700 ease-in-out absolute z-5 left-[53%] bottom-5 w-72 h-72 backdrop-blur-lg rounded-full flex flex-col items-center justify-center border">
          <div className="text-lg flex flex-col items-center text-center gap-3 p-2">
            <div className="text-3xl">
              <GiMountains />
            </div>
            <p>
              Ready for anything, from rocky mountain trails to smart city
              streets.
            </p>
          </div>
        </div>
        <Link href={"/cars"}>
          <div className=" hover:scale-[1.1] hover:duration-700 ease-in-out absolute z-5 right-[13%] bottom-[20%] w-72 h-72 backdrop-blur-lg rounded-full flex flex-col items-center justify-center border">
            <div className="text-xl flex flex-col items-center gap-3 ">
              <div className="text-3xl">
                <FaCar />
              </div>
              Press here
              <p className="text-sm">Find the most suitable car for you</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
