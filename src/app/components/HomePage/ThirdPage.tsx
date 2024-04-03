import React from "react";
import { FaCar } from "react-icons/fa";
import { IoPeopleCircle } from "react-icons/io5";
import { ImLocation2 } from "react-icons/im";

export const ThirdPage = () => {
  return (
    <div
      className="w-full flex-col relative justify-center items-center flex h-[1200px] gap-10 py-[360px]"
      style={{
        backgroundImage: 'url("/testbg.jpg")',
        backgroundSize: "cover",
      }}
    >
      <div
        id="banner"
        className="w-[100%] h-[200px]  absolute top-0 flex items-center justify-evenly text-2xl text-[#d9d9d9]"
      >
        <div className="flex flex-col items-center gap-8 ">
          <div className="text-4xl">
            <FaCar />
          </div>
          Explore Cars
        </div>
        <div className="flex flex-col items-center gap-8 ">
          <div className="text-4xl">
            <IoPeopleCircle />
          </div>
          About us
        </div>
        <div className="flex flex-col items-center gap-8 ">
          <div className="text-4xl">
            <ImLocation2 />
          </div>
          Our address
        </div>
      </div>
    </div>
  );
};
