import React from "react";
import Header from "../_components/Header/Header";
import Footer from "../_components/Footer/Footer";
import AboutProject from "../_components/aboutProject/AboutProject";

function page() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#0b0b0b] w-full p-[30px]">
      <Header />
      <AboutProject />
      <Footer />
    </div>
  );
}

export default page;
