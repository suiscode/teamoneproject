"use client";
import React, { useEffect, useRef } from "react";
import CarModel from "./CarModel";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";

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
      className="w-full items-center flex-col flex h-screen bg-[#000] "
    >
      <div className="font-bold mt-[200px] relative flex text-[100px]">
        Rent the
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 2.25 }}
          className="bg-white text-black"
        >
          luxury.
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 1, y: 0 },
            visible: { opacity: 0, y: 75 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 2 }}
          className="bg-white text-black absolute left-[410px]"
        >
          basic.
        </motion.div>
        Own the <span className="bg-white text-black">thrill</span>.
      </div>
      <div className="h-full w-full absolute top-[100px]">
        <CarModel />
      </div>
      <Link href={"/cars"}>
        <button className="absolute text-xl bottom-[200px] right-[400px] border-2 rounded-xl px-4 py-2 hover:bg-white hover:text-black hover:border-black">
          Explore now
        </button>
      </Link>
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
