import React from "react";
import Header from "../_components/Header/Header";
import PaymentMain from "../_components/Payment/PaymentMain";
import PaymentFooter from "../_components/Payment/PaymentFooter";
import Footer from "../_components/Footer/Footer";

function page() {
  return (
    <div
      className="w-full flex flex-col min-h-screen justify-between items-center "
      id="cars"
    >
      <Header />
      <div className="w-[1440px] h-full flex justify-center">
        <PaymentMain />
      </div>
      <Footer />
    </div>
  );
}

export default page;
