import React from "react";
import Header from "../_components/Header/Header";
import AboutUs from "../_components/aboutUs/AboutUs";
import Footer from "../_components/Footer/Footer";

function AboutPage() {
  return (
    <div className="flex flex-col bg-[#0b0b0b] w-full items-center">
      <Header />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default AboutPage;
