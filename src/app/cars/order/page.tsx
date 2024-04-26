"use client";
import { IoHomeOutline } from "react-icons/io5";
import { IoCarSportOutline } from "react-icons/io5";
import { RiSettingsLine } from "react-icons/ri";
import { CiCircleInfo } from "react-icons/ci";
import { SlLogout } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import Header from "../../_components/Header/Header";
import { OrderMap } from "./OrderMap";
import React from "react";
import { OrderDetail } from "./OrderDetail";

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
    img: "/car.png",
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
    img: "/car2.png",
    name: "Rolls-Royce",
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
    img: "/car3.png",
    name: "Koenigsegg",
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
    img: "/car4.png",
    name: "All New Rush",
    type: "SUV",
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
    img: "/car5.png",
    name: "CR - V",
    type: "SUV",
    price: "80.00",
    pickupDate: "July 20",
    pickupLocation: "Kota Semarang",
    pickupTime: "08:00",
    dropoffDate: "July 21",
    dropoffLocation: "Kota Semarang",
    dropoffTime: "01:00",
  },
  {
    id: "6",
    img: "/car6.png",
    name: "All New Terios",
    type: "SUV",
    price: "80.00",
    pickupDate: "July 20",
    pickupLocation: "Kota Semarang",
    pickupTime: "08:00",
    dropoffDate: "July 21",
    dropoffLocation: "Kota Semarang",
    dropoffTime: "01:00",
  },
  {
    id: "7",
    img: "/car7.png",
    name: "MG ZX Exclusice",
    type: "Hatchback",
    price: "80.00",
    pickupDate: "July 20",
    pickupLocation: "Kota Semarang",
    pickupTime: "08:00",
    dropoffDate: "July 21",
    dropoffLocation: "Kota Semarang",
    dropoffTime: "01:00",
  },
];

// STATE {}
export default function Order() {
  const [data, setData] = useState(OrderData[0]);
  return (
    <div
      id="cars"
      className="w-[1440px] flex py-5 items-center justify-center "
    >
      <div className="w-full flex gap-[20px] pt-6 ">
        <div className="w-[186px] h-[580px] flex flex-col justify-between text-white  ">
          <div className="gap-[20px] w-full pl-2">
            <p className="text-[12px]">M A I N M E N U</p>
            <div className="w-[256px] h-[56px] flex items-center  rounded-lg px-6 gap-[10px]">
              <CgProfile className=" w-[24px] h-[24px]" />
              <p className="text-[16px] ">Profile</p>
            </div>
            <div className="w-[256px] h-[56px] flex items-center   rounded-lg px-6 gap-[10px]">
              <IoCarSportOutline className=" w-[24px] h-[24px]" />
              <p className="text-[16px] ">Dashboard</p>
            </div>
            <p className="text-[12px] pt-10">P R E F E R E N C E S</p>
            <div className="w-[256px] h-[56px] flex items-center  ] rounded-lg px-6 gap-[10px]">
              <RiSettingsLine className="w-[24px] h-[24px]" />
              <p className="text-[16px] ">Settings</p>
            </div>
            <div className="w-[256px] h-[56px] flex items-center  rounded-lg px-6 gap-[10px]">
              <CiCircleInfo className=" w-[24px] h-[24px]" />
              <p className="text-[16px] ">Help & Center</p>
            </div>
          </div>
        </div>
        <div className="flex justify-around gap-[20px]   ">
          <OrderDetail data={data} />
          <div className="w-[486px] h-fit  flex items-center justify-start gap-[20px] py-6 px-6 backdrop-blur-sm  bg-black/50 rounded-lg">
            <div className="w-[426px] gap-[20px] flex flex-col justify-around">
              <div className="w-full h-[24px] flex items-center justify-between">
                <strong className="text-white text-[20px]">
                  Recent Transaction
                </strong>
              </div>
              <div className="w-[426px] h-fit flex flex-col gap-[20px] ">
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
