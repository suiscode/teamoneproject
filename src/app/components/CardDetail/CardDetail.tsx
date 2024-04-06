import React from "react";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { useRouter } from "next/navigation";

function CardDetail() {
  return (
    <div className="w-[1440px] justify-between bg-black/90 flex p-9">
      <div className="flex flex-col w-[48%] h-[500px]">
        <div className="w-full relative h-full">
          <Image
            src="/salon.png"
            alt="image"
            fill
            className="rounded-xl absolute"
          />
        </div>
        <div className="flex justify justify-between">
          <div className="w-[148px] h-[124px] relative">
            <Image
              src="/salon.png"
              alt=""
              fill
              className="rounded-xl absolute"
            />
          </div>
          <div className="w-[148px] h-[124px] relative">
            <Image
              src="/salon.png"
              alt=""
              fill
              className="rounded-xl absolute"
            />
          </div>
          <div className="w-[148px] h-[124px] relative">
            <Image
              src="/salon.png"
              alt=""
              fill
              className="rounded-xl absolute"
            />
          </div>
        </div>
      </div>

      <div className="w-[48%] p-6 space-y-8 bg-black text-secondary rounded-md">
        <div className="flex w-full justify-between items-center">
          <div>
            <h1>Car Name</h1>
          </div>
          <div>
            <FaRegHeart />
          </div>
        </div>
        <div>
          <h1 className="text-lg font-medium">
            NISMO has become the embodiment of Nissan&apos;s outstanding
            performance, inspired by the most unforgiving proving ground, the
            &quot;race track&quot;.
          </h1>
        </div>
        <div className="flex justify-between items-center">
          <div className="space-y-4 w-[40%]">
            <div className="flex justify-between w-full">
              <h1>Type Car</h1>
              <h1 className="font-medium">Steering</h1>
            </div>
            <div className="flex justify-between w-full">
              <h1>Sport</h1>
              <h1 className="font-medium">Manual</h1>
            </div>
          </div>
          <div className="space-y-4 w-[40%]">
            <div className="flex justify-between w-full">
              <h1>Capacity</h1>
              <h1 className="font-medium">2 Person</h1>
            </div>
            <div className="flex justify-between w-full">
              <h1>Gasoline</h1>
              <h1 className="font-medium">70L</h1>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <div>
              <h1>
                <span className="font-bold text-[28px]">$80.00/</span>days
              </h1>
            </div>
            <div className="line-through text-black/50">$100.00</div>
          </div>
          <div>
            <button className="rounded-lg bg-[#3563E9] w-[140px] h-[56px] text-[white]">
              Rent Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
