import Image from "next/image";
import React from "react";

export const OrderMap = ({ el, setData }: any) => {
  const handleSelect = () => {
    setData(el);
  };
  return (
    <div
      onClick={() => {
        handleSelect();
      }}
      className="w-[426px]  flex items-center justify-between cursor-pointer  "
    >
      <Image alt="" src={el.img} width={132} height={72} />
      <div className="w-[156px] h-[48px] flex flex-col justify-between ">
        <strong className="text-white text-[16px]">{el.name}</strong>
        <p className="text-white text-[12px]">{el.type}</p>
      </div>
      <div className="w-[108px] h-[48px] flex flex-col items-end justify-between ">
        <p className="text-white text-[12px]">{el.pickupDate}</p>
        <strong className="text-white text-[16px]">${el.price}</strong>
      </div>
    </div>
  );
};
