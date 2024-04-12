"use client";
import React, { useEffect, useRef } from "react";
import CarModel from "./CarModel";
import { motion, useAnimation, useInView } from "framer-motion";
import { AiOutlineArrowDown } from "react-icons/ai";
import { FaMouse } from "react-icons/fa";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { IoChevronDown } from "react-icons/io5";

const LandingPage = () => {
  const ref: any = useRef();
  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <div
      ref={ref}
      id="home"
      className="w-full z-40 flex-col flex h-screen items-center justify-center bg-[#000] "
    >
      <div className="border-[8px] rounded-md border-[#660000] w-[80%] md:h-[700px] h-[50%] flex flex-col gap-[100px] ">
        <div className="font-bold mt-[80px] relative pl-4 ">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 2.25 }}
            className="md:text-[80px] font-black text-[40px]"
          >
            <h1>Rent the luxury.</h1>
            <p className="md:text-[40px] text-[20px] -mt-[30px]">
              Own the thrill
            </p>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 1, y: 0 },
              visible: { opacity: 0, y: 75 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 2 }}
            className=" absolute left-[10px] top-0 text-red-700 md:text-[80px] text-[40px]"
          >
            Rent the basic.
          </motion.div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="md:text-2xl text-[20px] pl-6 ">
            <p>Experience the Unprecedented, Drive with Uniqueness</p>
            <p>Drive and Laugh, Like Nobody&apos;s Business</p>
          </div>
          {/* <button className="cursor-pointer z-40 w-[12%] ml-6 flex items-center gap-8 border-red-600 border-2 rounded-xl px-8 py-4 hover:bg-white hover:text-black hover:border-black">
            Scroll down
            <AiOutlineArrowDown />
          </button> */}
        </div>
      </div>
      <div className="h-full w-full absolute top-[130px] right-10 flex justify-end items-center">
        <div className="flex items-center gap-4 text-2xl absolute right-[55%] motion-safe:animate-ping">
          <BsChevronLeft />
          <BsChevronLeft />
          <BsChevronLeft />
        </div>
        <CarModel />
        <div className="flex items-center gap-4 text-2xl absolute right-10 motion-safe:animate-ping">
          <BsChevronRight />
          <BsChevronRight />
          <BsChevronRight />
        </div>
      </div>
      <h1 className="bottom-10 absolute z-[90] flex items-center flex-col ">
        <IoChevronDown className="w-10  mb-[-10px] h-10 text-red-500" />
        <IoChevronDown className="w-6 animate-pulse h-6 " />
      </h1>
    </div>
  );
};

export default LandingPage;
