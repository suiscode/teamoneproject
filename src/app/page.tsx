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

export default function Home() {
  // gsap.to(window, { duration: 2, scrollTo: 400 });
  return (
    <div className="w-screen flex items-center justify-center flex-col z-10 text-white">
      <HomeHeader />

      <LandingPage />

      <SecondPage />

      <ThirdPage />
    </div>
  );
}
