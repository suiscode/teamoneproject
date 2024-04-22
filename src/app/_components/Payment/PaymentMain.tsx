"use client";
import React, { useEffect, useState, useTransition } from "react";
import PaymentCards from "./PaymentCards";
import PaymentTotal from "./PaymentTotal";
import { CarItem } from "@/lib/interface";
import SkeletonTotalSkeleton from "./SkeletonTotal";

const PaymentMain = () => {
  const [carData, setCarData] = useState<CarItem>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const localGet = localStorage.getItem("BUY");

    if (localGet) {
      const localItem = JSON.parse(localGet);
      setCarData(localItem);
      setLoading(false);
    }
  }, []);

  return (
    <div id="cars" className="w-full justify-between py-8 flex">
      <PaymentCards />
      {!loading ? (
        <PaymentTotal carData={carData as CarItem} />
      ) : (
        <SkeletonTotalSkeleton />
      )}
    </div>
  );
};

export default PaymentMain;
