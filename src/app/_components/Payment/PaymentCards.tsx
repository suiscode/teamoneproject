import React from "react";
import PaymentBilling from "./PaymentBilling";
import RentalInfo from "./RentalInfo";
import PaymentMethod from "./PaymentMethod";
import PaymentConfirmation from "./PaymentConfirmation";

const PaymentCards = async () => {
  return (
    <div className="w-[896px] h-[2506px] mt-[32px] ml-[32px] flex flex-col gap-[30px]">
      <PaymentBilling />
      <RentalInfo />
      <PaymentMethod />
      <PaymentConfirmation />
    </div>
  );
};

export default PaymentCards;
