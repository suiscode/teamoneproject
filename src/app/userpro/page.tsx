import React from "react";
import Header from "../_components/Header/Header";
import Footer from "../_components/Footer/Footer";
import UserProfile from "../_components/userpro/UserProfile";

function userpro() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <UserProfile />
      <Footer />
    </div>
  );
}

export default userpro;
