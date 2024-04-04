"use client";
import LandingPage from "./components/HomePage/LandingPage";
import SecondPage from "./components/HomePage/SecondPage";
import HomeHeader from "./components/HomePage/HomeHeader";
import { ThirdPage } from "./components/HomePage/ThirdPage";
import { useScroll } from "framer-motion";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import React from "react";

// const Section = ({ children }: { children: React.ReactNode }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 0 }}
//     animate={{ opacity: 1, y: 100 }}
//     transition={{ duration: 0.5 }}
//   >
//     {children}
//   </motion.div>
// );

export default function Home() {
  // useEffect(() => {
  //   require("react-scroll").animateScroll.scrollToTop();
  // }, []);

  return (
    <div className="w-screen flex items-center justify-center flex-col z-10 text-white">
      <HomeHeader />

      <LandingPage />

      <SecondPage />

      <ThirdPage />
    </div>
  );
}
