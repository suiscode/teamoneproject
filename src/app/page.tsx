import LandingPage from "./_components/HomePage/LandingPage";
import SecondPage from "./_components/HomePage/SecondPage";
import HomeHeader from "./_components/HomePage/HomeHeader";
import { ThirdPage } from "./_components/HomePage/ThirdPage";
import React from "react";
import TopSellers from "./_components/HomePage/TopSellers";

export default function Home() {
  return (
    <div className="w-screen flex flex-col z-10 text-white  ">
      <HomeHeader />
      <LandingPage />
      <SecondPage />
      <TopSellers />
      <ThirdPage />
    </div>
  );
}
