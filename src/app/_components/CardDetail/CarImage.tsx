"use client";
import Image from "next/image";
import React, { useState } from "react";

function CarImage({ data }: any) {
  const [state, setState] = useState(0);

  console.log(state);

  return (
    <div className="flex flex-col w-[48%] h-[500px]">
      <div className="w-full relative h-full">
        <Image
          src={data.img[state]}
          alt="image"
          fill
          className="rounded-xl absolute"
        />
      </div>
      <div className="flex justify justify-between">
        <div className="w-[148px] h-[124px] relative">
          <Image
            src={data.img[0]}
            alt=""
            onClick={() => setState(0)}
            fill
            className="rounded-xl cursor-pointer  absolute"
          />
        </div>
        <div className="w-[148px] h-[124px] relative">
          {data.img[1] && (
            <Image
              src={data.img[1]}
              alt=""
              fill
              onClick={() => setState(1)}
              className="rounded-xl  cursor-pointer  absolute"
            />
          )}
        </div>
        <div className="w-[148px] h-[124px] relative">
          {data.img[2] && (
            <Image
              src={data.img[2]}
              alt=""
              fill
              onClick={() => setState(2)}
              className="rounded-xl cursor-pointer  absolute"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default CarImage;
