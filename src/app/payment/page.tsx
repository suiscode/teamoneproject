import React from "react";
import Header from "../_components/Header/Header";
import PaymentMain from "../_components/Payment/PaymentMain";
import PaymentFooter from "../_components/Payment/PaymentFooter";

function page() {
  return (
    <div>
      <Header />
      <PaymentMain />
      <PaymentFooter />
    </div>
  );
}

export default page;
