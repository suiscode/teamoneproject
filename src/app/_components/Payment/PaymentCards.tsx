import React from "react";
import PaymentBilling from "./PaymentBilling";
import RentalInfo from "./RentalInfo";
import PaymentMethod from "./PaymentMethod";
import PaymentConfirmation from "./PaymentConfirmation";

const PaymentCards = () => {
  return (
    <div className="w-[896px] h-[2506px] flex flex-col gap-[30px]">
      {/* <PaymentBilling /> */}
      <RentalInfo />
      <PaymentMethod />
      <PaymentConfirmation />
    </div>
  );
};

export default PaymentCards;
