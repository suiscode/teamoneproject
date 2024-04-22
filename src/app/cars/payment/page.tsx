import React from "react";
import Header from "../../_components/Header/Header";
import PaymentMain from "../../_components/Payment/PaymentMain";
import PaymentFooter from "../../_components/Payment/PaymentFooter";

function page() {
  return (
    <div className="w-[1440px] items-center flex justify-center">
      <PaymentMain />
    </div>
  );
}

export default page;
