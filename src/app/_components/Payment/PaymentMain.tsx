"use client";
import React, { useEffect, useState, useTransition } from "react";
import PaymentCards from "./PaymentCards";
import PaymentTotal from "./PaymentTotal";
import { CarItem } from "@/lib/interface";
import SkeletonTotalSkeleton from "./SkeletonTotal";
import RentalInfo from "./RentalInfo";

interface DateRange {
  from: Date;
  to: Date;
}

const PaymentMain = () => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);
  const [carData, setCarData] = useState<CarItem>();
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState<DateRange>({
    from: new Date(),
    to: currentDate,
  });

  useEffect(() => {
    const localGet = localStorage.getItem("BUY");

    if (localGet) {
      const localItem = JSON.parse(localGet);
      setCarData(localItem);
      setLoading(false);
    }
  }, []);

  return (
    <div className="w-full justify-between py-8 flex items-center">
      <RentalInfo
        dateRange={date}
        carData={carData as CarItem}
        setDateRange={setDate}
      />
      {!loading ? (
        <PaymentTotal carData={carData as CarItem} dateRange={date} />
      ) : (
        <SkeletonTotalSkeleton />
      )}
    </div>
  );
};

export default PaymentMain;
