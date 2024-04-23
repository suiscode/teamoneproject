import { CarItem } from "@/lib/interface";
import Image from "next/image";
import React from "react";
interface DateRange {
  from: Date;
  to: Date;
}
interface ChildProps {
  dateRange: DateRange;
  carData: CarItem;
}

const PaymentTotal: React.FC<ChildProps> = ({ carData, dateRange }) => {
  function calculateDayDifference(dateRange: DateRange) {
    let differenceInMilliseconds =
      dateRange.to.getTime() - dateRange.from.getTime();
    let differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);

    return Math.abs(Math.round(differenceInDays)); // Absolute value and rounded
  }

  const dateDifference = calculateDayDifference(dateRange);
  console.log(dateDifference);

  return (
    <div className="w-[36%] p-4 h-[380px] border-2 border-red-500 rounded-[10px] bg-[#FFFFFF] flex flex-col gap-[30px]">
      <div className="w-full flex flex-col gap-[6px]">
        <div className="text-xl font-bold text-[#1A202C]">Rental Summary</div>
        <div className="text-[#90A3BF] text-[14px] font-medium w-full">
          Prices may change depending on the length of the rental and the price
          of your rental car.
        </div>
      </div>
      <div className="w-full flex gap-[16px]">
        <div className="w-1/2 h-[108px] relative ">
          <Image
            src={carData.img[0]}
            fill
            className="absolute object-cover"
            alt="buyimg"
          />
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
      <div className="w-full flex flex-col border-t-2">
        <div className="flex">
          <h1 className="w-[200px]">Car price per day</h1>

          <h1>{carData.price.toLocaleString()}</h1>
        </div>
        <div className="flex">
          <h1 className="w-[200px]">Rent day</h1>

          <h1>{dateDifference}</h1>
        </div>
        <div className="flex border-t mt-2 border-black">
          <h1 className="w-[200px]">Total Rental Price</h1>

          <h1>{(dateDifference * carData.price).toLocaleString()}</h1>
        </div>
      </div>
    </div>
  );
};

export default PaymentTotal;
