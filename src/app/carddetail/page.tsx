import React from "react";
import CardDetail from "../components/CardDetail/CardDetail";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Category from "../admin/Category";
import AllCategory from "../components/Category/AllCategory";

function page() {
  return (
    <div>
      <Header />
      <div className="flex justify-center w-full">
        <AllCategory />
        <CardDetail />
      </div>
      <Footer />
    </div>
  );
}

export default page;
