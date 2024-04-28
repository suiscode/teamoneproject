"use client";
import { IoHomeOutline } from "react-icons/io5";
import { IoCarSportOutline } from "react-icons/io5";
import { RiSettingsLine } from "react-icons/ri";
import { CiCircleInfo } from "react-icons/ci";
import { SlLogout } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import Header from "../../_components/Header/Header";
import React from "react";
import { OrderDetail } from "@/app/cars/order/OrderDetail";
import { OrderMap } from "@/app/cars/order/OrderMap";
import { OrderInterface } from "@/lib/interface";

interface DashboardProps {
  orders: OrderInterface[];
}

const Dashboard: React.FC<DashboardProps> = ({ orders }) => {
  const [data, setData] = useState<OrderInterface>(orders[0]);

  return (
    <div
      id="cars"
      className="w-[1440px] flex py-5 items-center justify-center "
    >
      <div className="w-full flex gap-[20px] pt-6 ">
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
                {orders.map((el, index) => {
                  return <OrderMap setData={setData} el={el} key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
