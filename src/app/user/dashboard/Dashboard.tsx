"use client";
import { IoHomeOutline } from "react-icons/io5";
import { IoCarSportOutline } from "react-icons/io5";
import { RiSettingsLine } from "react-icons/ri";
import { CiCircleInfo } from "react-icons/ci";
import { SlLogout } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { useEffect, useState } from "react";
import Header from "../../_components/Header/Header";
import React from "react";
import { OrderDetail } from "@/app/cars/order/OrderDetail";
import { OrderMap } from "@/app/cars/order/OrderMap";
import { OrderInterface } from "@/lib/interface";
import { fetchUserOrder } from "@/app/fetch";
import axios from "axios";

interface DashboardProps {}
const Dashboard: React.FC<DashboardProps> = () => {
  const [orders, setOrders] = useState<OrderInterface[]>([]);
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState<OrderInterface>(orders[0]);

  useEffect(() => {
    const getOrders = async () => {
      const orders = await axios.get("/api/order");
      setOrders(orders.data.data);
      setData(orders.data.data[0]);
      setLoading(false);
      console.log(orders);
    };

    getOrders();
  }, []);

  if (loading) {
    return (
      <div className="text-white text-center self-center justify-self-center mr-[500px]">
        Loading...
      </div>
    );
  }

  return (
    <div id="cars" className="w-[1440px]">
      <div className="w-full flex gap-[20px] pt-6">
        <div className="flex justify-around gap-[20px] w-full">
          {data && <OrderDetail data={data} />}
          <div className="w-[486px] h-fit  flex items-center justify-start gap-[20px] py-6 px-6 backdrop-blur-sm  bg-black/50 rounded-lg">
            <div className="w-[426px] gap-[20px] flex flex-col justify-around">
              <div className="w-full h-[24px] flex items-center justify-between">
                <strong className="text-white text-[20px]">
                  Recent Transaction
                </strong>
              </div>
              <div className="w-[446px] h-[486px] overflow-y-scroll flex flex-col gap-[20px] ">
                {orders.length === 0 && (
                  <h1 className="text-white text-[20px]">
                    No recent transactions
                  </h1>
                )}
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
