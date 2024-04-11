"use client";
import LandingPage from "./_components/HomePage/LandingPage";
import SecondPage from "./_components/HomePage/SecondPage";
import HomeHeader from "./_components/HomePage/HomeHeader";
import { ThirdPage } from "./_components/HomePage/ThirdPage";
import { useScroll } from "framer-motion";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import React from "react";
import axios from "axios";
import TestPage from "./test/Testhome";
import { IoChevronDown } from "react-icons/io5";

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.post("/api/sort/", { name: "zolo" });
      console.log(res);
    };
    fetchData();
  }, []);
  // gsap.to(window, { duration: 2, scrollTo: 400 });
  return (
    <div className="w-screen flex items-center justify-center flex-col z-10 text-white  ">
      <h1 className="fixed bottom-10 z-[90] flex items-center flex-col ">
        <IoChevronDown className="w-10  mb-[-10px] h-10 text-red-500" />
        <IoChevronDown className="w-6 animate-pulse h-6 " />
      </h1>
      <HomeHeader />

      {/* <LandingPage /> */}
      <TestPage />
      {/* 
      <SecondPage />
      <ThirdPage /> */}
    </div>
  );
}
