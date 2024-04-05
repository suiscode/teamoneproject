import React from "react";
import CardDetail from "../components/CardDetail/CardDetail";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
// import Category from "../admin/Category";
import AllCategory from "../components/Category/AllCategory";
import AboutUs from "../components/aboutUs/AboutUs";

function page() {
  return (
    <div>
      <Header />
      <div className="flex gap-[32px] justify-center items-center">
        <AllCategory />
        <CardDetail />
      </div>
      <Footer />
    </div>
  );
}

export default page;
