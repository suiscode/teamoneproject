import React from "react";
import Header from "../_components/Header/Header";
import Footer from "../_components/Footer/Footer";
import Text from "./Text";

function TermsOfUse() {
  return (
    <div className="bg-black h-full w-full text-white flex flex-col items-center sm:w-full md:w-full lg:w-full">
      <Header />
      <p className="text-xl font-bold pt-8">Terms Of Use</p>
      <div className="w-[950px] p-7 flex items-center flex-col sm:w-full md:w-full lg:w-full">
        <Text />
      </div>
      <Footer />
    </div>
  );
}

export default TermsOfUse;
