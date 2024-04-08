import React from "react";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

function CardDetail({ data }: any) {
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
            <h1>{data.name}</h1>
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
              <h1>Car type</h1>
              <h1 className="font-medium">{data.type}</h1>
            </div>
            <div className="flex justify-between w-full">
              <h1>Steering</h1>
              <h1 className="font-medium">{data.steering}</h1>
            </div>
          </div>
          <div className="space-y-4 w-[40%]">
            <div className="flex justify-between w-full">
              <h1>Capacity</h1>
              <h1 className="font-medium">{data.capacity}</h1>
            </div>
            <div className="flex justify-between w-full">
              <h1>Gasoline</h1>
              <h1 className="font-medium">{data.gasoline}</h1>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <div>
              <h1>
                <span className="font-bold text-[28px]">
                  {data.salePrice ? data.salePrice : data.price}$/
                </span>
                days
              </h1>
            </div>
            <div className="line-through text-black/50">
              {data.salePrice ? data.price : ""}
            </div>
          </div>
          <div>
            <Button className="rounded-lg bg-[#3563E9] hover:bg-[#3563E9]/80 w-[140px] h-[56px] text-[white]">
              Rent Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
