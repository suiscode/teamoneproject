import React from "react";
import PaymentCards from "./PaymentCards";
import PaymentTotal from "./PaymentTotal";

const PaymentMain = async () => {
  return (
    <div id="cars" className="w-full h-[2640px] bg- gap-[32px] flex">
      <PaymentCards />
      <PaymentTotal />
    </div>
  );
};

export default PaymentMain;
