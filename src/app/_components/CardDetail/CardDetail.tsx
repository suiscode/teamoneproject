import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import CarImage from "./CarImage";

function CardDetail({ data }: any) {
  return (
    <div className="justify-between bg-black flex p-8 border border-white gap-8 my-[60px] rounded-md">
      <div>
        <CarImage data={data} />
      </div>

      <div className=" w-[700px] p-8 bg-black text-secondary rounded-md border border-white">
        <div className="flex w-full justify-between items-center">
          <div>
            <h1>{data.name}</h1>
          </div>
          <div>
            <FaRegHeart />
          </div>
        </div>
        <div>
          <h1 className="text-lg font-medium">{data.description}</h1>
        </div>

        <div className="flex justify-between items-center mt-[30px]">
          <div className="space-y-4 w-[40%]">
            <div className="flex justify-between w-full">
              <h1 className="text-[25px]">Car type :</h1>
              <h1 className="text-[23px] text-[#8C8C8C]">{data.type}</h1>
            </div>
            <div className="flex justify-between w-full">
              <h1 className="text-[25px]">Steering :</h1>
              <h1 className="text-[23px] text-[#8C8C8C]">{data.steering}</h1>
            </div>
          </div>
          <div className="space-y-4 w-[40%]">
            <div className="flex justify-between w-full">
              <h1 className="text-[25px]">Capacity :</h1>
              <h1 className="text-[23px] text-[#8C8C8C]">{data.capacity}</h1>
            </div>
            <div className="flex justify-between w-full">
              <h1 className="text-[25px]">Gasoline :</h1>
              <h1 className="text-[23px] text-[#8C8C8C]">{data.gasoline}</h1>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-[70px]">
          <div>
            <div>
              <h1>
                <span className="font-bold text-[28px]">
                  {data.salePrice ? data.salePrice : data.price} ₮/
                </span>
                days
              </h1>
            </div>
            <div className="line-through text-black/50">
              {data.salePrice ? data.price : ""}
            </div>
          </div>
          <div>
            <Button className="rounded-lg bg-black border border-white w-[140px] h-[56px] text-[white] text-[18px]">
              Rent Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
