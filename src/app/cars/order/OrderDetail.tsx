import Image from "next/image";
import React from "react";

export const OrderDetail = ({ data }: any) => {
  return (
    <div className="w-[700px] h-[578px] flex flex-col items-center  backdrop-blur-sm   bg-black/50 rounded-lg ">
      <div className="w-fit h-full py-5 flex flex-col items-center justify-around gap-[20px]">
        <div className="w-[700px] h-[180px] flex items-center justify-between   px-4 ">
          <div className="w-[600px] h-fit flex items-center ">
            <Image alt="" src={data.car.img[0]} width={350} height={122} />
          </div>

          <div className="w-[200px]  flex flex-col  justify-between ">
            <strong className="text-white text-[26px]">{data.car.name}</strong>
            <p className="text-[#90A3BF] text-[16px]">{data.car.type}</p>
          </div>
        </div>
        <div className="flex w-full px-4 gap-[10px]">
          <div className="flex-1 h-[100px] flex flex-col justify-around text-white px-6 rounded-lg bg-white/30">
            <div className="flex gap-2">
              <p>Pick-Up</p>
            </div>
            <div className="w-fit h-[48px] flex items-center justify-between gap-[50px]">
              <div className="w-fit h-[48px] flex flex-col  justify-between">
                <strong className=" text-[16px]">Location</strong>
                <p className="text-[#90A3BF] text-[12px]">
                  {data.pickupLocation}
                </p>
              </div>
              <div className="w-fit h-[48px] flex flex-col  justify-between">
                <strong className=" text-[16px]">Date</strong>
                <p className="text-[#90A3BF] text-[12px]">
                  {data.duration.from.split("T")[0]}
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 h-[100px] flex flex-col justify-around px-6 text-white   rounded-lg  bg-white/30">
            <div className="flex gap-2">
              <p>Drop-Off</p>
            </div>
            <div className="w-fit h-[48px] flex items-center justify-between gap-[60px]">
              <div className="w-fit h-[48px] flex flex-col  justify-between">
                <strong className=" text-[16px]">Location</strong>
                <p className="text-[#90A3BF] text-[12px]">
                  {data.dropLocation}
                </p>
              </div>
              <div className="w-fit h-[48px] flex flex-col  justify-between">
                <strong className=" text-[16px]">Date</strong>
                <p className="text-[#90A3BF] text-[12px]">
                  {data.duration.to.split("T")[0]}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[48px] flex items-center justify-between gap-[40px] px-6 text-white   ">
          <strong className="text-[22px]">Total Rental Price</strong>
          <strong className="w-[128px] h-[48px] flex items-center justify-center  text-[32px]">
            ${data.amount}
          </strong>
        </div>
      </div>
    </div>
  );
};
