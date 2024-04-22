import { CarItem } from "@/lib/interface";
import Image from "next/image";
import React from "react";

const PaymentTotal: React.FC<{ carData: CarItem }> = ({ carData }) => {
  console.log(carData);

  return (
    <div className="w-[36%] p-4 h-[320px] border-2 border-red-500 rounded-[10px] bg-[#FFFFFF] flex flex-col gap-[30px]">
      <div className="w-full flex flex-col gap-[6px]">
        <div className="text-xl font-bold text-[#1A202C]">Rental Summary</div>
        <div className="text-[#90A3BF] text-[14px] font-medium w-full">
          Prices may change depending on the length of the rental and the price
          of your rental car.
        </div>
      </div>
      <div className="w-full flex gap-[16px]">
        <div className="w-1/2 h-[108px] relative ">
          <Image src="/" fill className="absolute" alt="buyimg" />
        </div>
        <h1 className="w-[220px] h-[40px] font-bold leading-[48px] text-[28px]">
          {carData.name}
        </h1>
        {/* <div className="w-[220px] h-[32px]"></div> */}
      </div>
      {/* <div className="w-[444px] flex ml-[26px] justify-between">
        <h1>Subtotal</h1>
        <h2></h2>
      </div> */}
      {/* <div className="w-[444px] flex ml-[26px] justify-between">
        <h1>Tax</h1>
        <h2></h2>
      </div> */}

      {/* 
      CAN ADD PROMO CODE
      <div className="w-[444px] h-[56px] bg-[#f6f7f9] flex ml-[26px] rounded-[10px] items-center justify-center">
        <div className="w-[400px] h-[24px]  flex items-center justify-between">
          <h1>Apply promo code</h1>
          <h2>Apply now</h2>
        </div>
      </div> */}
      <div className="w-full h-[48px] flex gap-[32px] border-t-2">
        <div className="w-full flex pt-2 items-center justify-between">
          <h1 className="w-[200px]">Total Rental Price</h1>
          {/* <div className="w-[304px]  h-[20px] text-[14px] font-medium leading-[21px]">
            Overall price and includes rental discount
          </div> */}
          <h1>Price</h1>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default PaymentTotal;
