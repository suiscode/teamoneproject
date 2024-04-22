"use client";
import { CarItem } from "@/lib/interface";
import Image from "next/image";
import React, { useState } from "react";

const CarImage: React.FC<{ data: CarItem }> = ({ data }) => {
  const [state, setState] = useState(0);

  return (
    <div className="flex flex-col w-[765px] gap-5 p-8 border border-white rounded-md">
      <div className="w-[700px] h-[400px] relative">
        <Image
          src={data.img[state]}
          alt="image"
          fill
          className="rounded-xl absolute object-cover"
        />
      </div>
      <div className="flex gap-5">
        <div className="w-[280px] h-[200px] relative bg-white  rounded-xl">
          <Image
            src={data.img[0]}
            alt=""
            onMouseEnter={() => setState(0)}
            fill
            className="rounded-xl cursor-pointer object-cover absolute"
          />
        </div>
        <div className="w-[280px] h-[200px] relative ">
          {data.img[1] && (
            <Image
              src={data.img[1]}
              alt=""
              fill
              onMouseEnter={() => setState(1)}
              className="rounded-xl  cursor-pointer object-cover  absolute"
            />
          )}
        </div>
        <div className="w-[280px] h-[200px] relative ">
          {data.img[2] && (
            <Image
              src={data.img[2]}
              alt=""
              fill
              onMouseEnter={() => setState(2)}
              className="rounded-xl cursor-pointer object-cover  absolute"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CarImage;
