"use client";
import React, { useEffect, useState, useTransition } from "react";
import PaymentCards from "./PaymentCards";
import PaymentTotal from "./PaymentTotal";
import { CarItem } from "@/lib/interface";
import SkeletonTotalSkeleton from "./SkeletonTotal";
import RentalInfo from "./RentalInfo";

interface DateRange {
  from: Date | undefined;
  to: Date | undefined;
}

const PaymentMain = () => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);
  const [carData, setCarData] = useState<CarItem>();
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState<DateRange>({
    from: undefined,
    to: undefined,
  });

  useEffect(() => {
    console.log(date);
  }, [date]);

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
      <RentalInfo dateRange={date} setDateRange={setDate} />
      {!loading ? (
        <PaymentTotal carData={carData as CarItem} dateRange={date} />
      ) : (
        <SkeletonTotalSkeleton />
      )}
    </div>
  );
};

export default PaymentMain;
