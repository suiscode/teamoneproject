"use client";
import React, { useEffect, useRef } from "react";
import CarModel from "./CarModel";
import {
  motion,
  useAnimation,
  useInView,
  useMotionValueEvent,
} from "framer-motion";
import { AiOutlineArrowDown } from "react-icons/ai";
import { FaMouse } from "react-icons/fa";

const LandingPage = () => {
  const ref: any = useRef();
  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      id="home"
      className="w-full flex-col flex h-screen items-center justify-center bg-[#000] "
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
            className="md:text-[80px] text-[40px]"
          >
            Rent the luxury.
            <p className="md:text-[40px] text-[20px]">Own the thrill</p>
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
        <div className="md:text-2xl text-[20px] pl-6 ">
          <p>Experience the Unprecedented, Drive with Uniqueness</p>
          <p>Drive and Laugh, Like Nobody&apos;s Business</p>
        </div>
        <button className="scroll-smooth w-[12%] ml-6 flex items-center gap-8 border-red-600 border-2 rounded-xl px-8 py-4 hover:bg-white hover:text-black hover:border-black">
          Scroll down
          <AiOutlineArrowDown />
        </button>
      </div>
      <div className="absolute right-[20%] top-[30%] text-lg flex border rounded-[25px] p-4 items-center gap-4">
        Drag below with your mouse
        <FaMouse />
      </div>
      <div className="h-full w-full absolute top-[150px] right-0 flex justify-end items-center">
        <CarModel />
      </div>
    </div>
  );
};

export default LandingPage;

{
  /* <p>
          Rent now and we can provide you the most comfortable and the most
          suitable car as you want. Experience the ultimate freedom of choice
          with us - tailor your adventure by choosing from our premium fleet of
          vehicles.
        </p> */
}
