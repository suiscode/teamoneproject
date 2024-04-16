"use client";
import { IoHomeOutline } from "react-icons/io5";
import { IoCarSportOutline } from "react-icons/io5";
import { RiSettingsLine } from "react-icons/ri";
import { CiCircleInfo } from "react-icons/ci";
import { SlLogout } from "react-icons/sl";
import Image from "next/image";
import { OrderDetail } from "@/app/Order/OrderDetail";
import { useState } from "react";
import Header from "../_components/Header/Header";

type Order = {
  id: string;
  img: string;
  name: string;
  type: string;
  price: string;
  pickupDate: string;
  pickupLocation: string;
  pickupTime: string;
  dropoffDate: string;
  dropoffLocation: string;
  dropoffTime: string;
};

const OrderData = [
  {
    id: "1",
    img: "/ordercar.png",
    name: "Nissan GT - R",
    type: "Sport Car",
    price: "80.00",
    pickupDate: "July 20",
    pickupLocation: "Kota Semarang",
    pickupTime: "08:00",
    dropoffDate: "July 21",
    dropoffLocation: "Kota Semarang",
    dropoffTime: "01:00",
  },
  {
    id: "2",
    img: "/ordercar.png",
    name: "Nissan GT - R",
    type: "Sport Car",
    price: "80.00",
    pickupDate: "July 20",
    pickupLocation: "Kota Semarang",
    pickupTime: "08:00",
    dropoffDate: "July 21",
    dropoffLocation: "Kota Semarang",
    dropoffTime: "01:00",
  },

  {
    id: "3",
    img: "/ordercar.png",
    name: "Nissan GT - R",
    type: "Sport Car",
    price: "80.00",
    pickupDate: "July 20",
    pickupLocation: "Kota Semarang",
    pickupTime: "08:00",
    dropoffDate: "July 21",
    dropoffLocation: "Kota Semarang",
    dropoffTime: "01:00",
  },
  {
    id: "4",
    img: "/ordercar.png",
    name: "Nissan GT - R",
    type: "Sport Car",
    price: "80.00",
    pickupDate: "July 20",
    pickupLocation: "Kota Semarang",
    pickupTime: "08:00",
    dropoffDate: "July 21",
    dropoffLocation: "Kota Semarang",
    dropoffTime: "01:00",
  },
  {
    id: "5",
    img: "/ordercar.png",
    name: "Nissan GT - R",
    type: "Sport Car",
    price: "80.00",
    pickupDate: "July 20",
    pickupLocation: "Kota Semarang",
    pickupTime: "08:00",
    dropoffDate: "July 21",
    dropoffLocation: "Kota Semarang",
    dropoffTime: "01:00",
  },
];

export const OrderMap = ({ el, setData }: any) => {
  const handleSelect = () => {
    setData(el);
  };
  return (
    <div
      onClick={() => {
        handleSelect();
      }}
      className="w-[476px] flex items-center justify-between cursor-pointer"
    >
      <Image alt="" src={el.img} width={132} height={72} />
      <div className="w-fit h-[48px] flex flex-col  justify-between">
        <strong className="text-[#1A202C] text-[16px]">{el.name}</strong>
        <p className="text-[#90A3BF] text-[12px]">{el.type}</p>
      </div>
      <div className="w-[108px] h-[48px] flex flex-col items-end justify-between">
        <p className="text-[#90A3BF] text-[12px]">{el.pickupDate}</p>
        <strong className="text-[#1A202C] text-[16px]">${el.price}</strong>
      </div>
    </div>
  );
};
// STATE {}
export default function Order() {
  const [data, setData] = useState(OrderData[0]);
  return (
    <div className="">
      <Header />
      <div id="cars" className="w-full h-screen flex py-5 justify-around ">
        <div className="w-[286px] h-[800px] flex flex-col justify-between border border-white   ">
          <div className="gap-[20px] w-full ">
            <p className="text-[#94A7CB66] text-[12px]">M A I N M E N U</p>
            <div className="w-[256px] h-[56px] flex items-center  rounded-lg px-6 gap-[10px]">
              <IoHomeOutline className="text-[#90A3BF] w-[24px] h-[24px]" />
              <p className="text-[16px] text-[#90A3BF]">Dashboard</p>
            </div>
            <div className="w-[256px] h-[56px] flex items-center   rounded-lg px-6 gap-[10px]">
              <IoCarSportOutline className="text-[#90A3BF] w-[24px] h-[24px]" />
              <p className="text-[16px] text-[#90A3BF]">Car Rent</p>
            </div>
            <p className="text-[#94A7CB66] text-[12px]">
              P R E F E R E N C E S
            </p>
            <div className="w-[256px] h-[56px] flex items-center  ] rounded-lg px-6 gap-[10px]">
              <RiSettingsLine className="text-[#90A3BF] w-[24px] h-[24px]" />
              <p className="text-[16px] text-[#90A3BF]">Settings</p>
            </div>
            <div className="w-[256px] h-[56px] flex items-center  rounded-lg px-6 gap-[10px]">
              <CiCircleInfo className="text-[#90A3BF] w-[24px] h-[24px]" />
              <p className="text-[16px] text-[#90A3BF]">Help & Center</p>
            </div>
          </div>
          <div className="w-[256px] h-[56px] flex items-center  rounded-lg px-6 gap-[10px]">
            <SlLogout className="text-[#90A3BF] w-[24px] h-[24px]" />
            <p className="text-[16px] text-[#90A3BF]">Log Out</p>
          </div>
        </div>
        <div className="flex flex-col w-[1200px] items-center justify-between border border-white ">
          <div className="w-[524px]">
            <OrderDetail data={data} />
          </div>
          <div className="w-[524px] h-fit  flex items-center justify-start py-6 px-6 border border-white">
            <div className="w-[476px] flex flex-col justify-around">
              <div className="w-[476px] h-[24px] flex items-center justify-between">
                <strong className="text-[#1A202C] text-[20px]">
                  Recent Transaction
                </strong>
                <p className="text-[#3563E9] text-[12px]">View All</p>
              </div>
              <div className="w-[476px] ">
                {OrderData.map((el, index) => {
                  return <OrderMap setData={setData} el={el} key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//iconuud der tooltip
