"use client";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { CarItem } from "@/lib/interface";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { FaRegHeart } from "react-icons/fa";

const CardInfo: React.FC<{ data: CarItem }> = ({ data }) => {
  const session = useSession();

  const { push } = useRouter();
  const handleRentNow = () => {
    if (session.status != "authenticated") {
      push("/auth/login");
      toast({
        variant: "default",
        title: "Please log in to rent a car",
      });
      return;
    }
    localStorage.setItem("BUY", JSON.stringify(data));
    push("/payment");
  };
  return (
    <div className="w-full  text-secondary space-y-4  rounded-md ">
      <div className="flex w-full justify-between items-center">
        <div>
          <h1 className="font-bold text-4xl">{data.name}</h1>
        </div>
        <div>
          <FaRegHeart />
        </div>
      </div>
      <div>
        <h1 className="text-lg font-medium">{data.description}</h1>
      </div>

      <div className="flex justify-between items-center mt-[30px]">
        <div className="space-y-4 w-[44%]">
          <div className="flex justify-between w-full">
            <h1 className="text-[25px]">Car type:</h1>
            <h1 className="text-[23px] text-[#8C8C8C]">{data.type}</h1>
          </div>
          <div className="flex justify-between w-full">
            <h1 className="text-[25px]">Steering :</h1>
            <h1 className="text-[23px] text-[#8C8C8C]">{data.steering}</h1>
          </div>
        </div>
        <div className="space-y-4 w-[44%]">
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
        <div className="space-y-[-10px]">
          <h1>
            <span className="font-bold text-[28px]">
              {data.salePrice ? data.salePrice : data.price} ₮/
            </span>
            days
          </h1>
          <div className="line-through text-gray-500">
            {data.salePrice ? data.price : ""}
          </div>
        </div>
        <div>
          <Button
            className="rounded-lg bg-[#3563E9] hover:bg-[#3563E9]/80 w-[140px] h-[56px] text-[white]"
            onClick={handleRentNow}
          >
            Rent Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
