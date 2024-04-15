"use client";
import Image from "next/image";
import React, { useState } from "react";

function CarImage({ data }: any) {
  const [state, setState] = useState(0);

  return (
    <div className="flex flex-col w-[730px] gap-5 p-8">
      <div className="w-[665px] h-[350px] relative">
        <Image
          src={data.img[state]}
          alt="image"
          fill
          className="rounded-xl absolute"
        />
      </div>
      <div className="flex gap-5">
        <div className="w-[280px] h-[200px] relative">
          <Image
            src={data.img[0]}
            alt=""
            onMouseEnter={() => setState(0)}
            fill
            className="rounded-xl cursor-pointer absolute"
          />
        </div>
        <div className="w-[280px] h-[200px] relative">
          {data.img[1] && (
            <Image
              src={data.img[1]}
              alt=""
              fill
              onMouseEnter={() => setState(1)}
              className="rounded-xl  cursor-pointer  absolute"
            />
          )}
        </div>
        <div className="w-[280px] h-[200px] relative">
          {data.img[2] && (
            <Image
              src={data.img[2]}
              alt=""
              fill
              onMouseEnter={() => setState(2)}
              className="rounded-xl cursor-pointer  absolute"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default CarImage;
