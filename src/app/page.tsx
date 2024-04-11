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
      <HomeHeader />
      <LandingPage />
      <SecondPage />
      <ThirdPage />
    </div>
  );
}
