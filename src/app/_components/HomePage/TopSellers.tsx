"use client";
import React, { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useAnimation,
  useScroll,
  useSpring,
} from "framer-motion";
import ImageCart from "./Image";

function TopSellers() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const carArray = [
    {
      image: "/PngItem_1184339.png",
      name: "CAMARO ZL1",
    },
    {
      image: "/galzuu.png",
      name: "GTR-500",
    },
    {
      image: "/pngegg.png",
      name: "PORSCHE 911",
    },
    {
      image: "/moving.png",
      name: "F-TYPE",
    },
  ];

  return (
    <div id="page" className="w-full h-[5300px] z-10 relative flex flex-col ">
      <div className="absolute top-0 bg-gradient-to-b from-black to-transparent h-1/4 w-full"></div>
      <div className="z-50 flex items-end text-end mr-[10%] flex-col gap-8">
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 25 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-[70px] font-black z-50 text-white  w-full ml-[120px]"
        >
          Feel the luxury you never felt
        </motion.div>

        <motion.p
          variants={{
            hidden: { opacity: 0, x: 25 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.75 }}
          className="text-3xl z-50 w-1/2 flex"
        >
          Whether you&apos;re embarking on a cross-country adventure or simply
          need reliable transportation for your daily commute, our fleet of
          top-quality vehicles has you covered.
        </motion.p>
      </div>
      <h1 className="text-center w-1/2 self-center text-[200px] font-bold  mt-[600px] leading-[200px] text-black">
        OUR TOP SELLERS
      </h1>
      <div className="flex flex-col gap-[500px] mt-[500px]">
        {carArray.map((item, index) => (
          <ImageCart
            key={index}
            image={item.image}
            name={item.name}
            index={index}
          />
        ))}
      </div>
      <motion.div
        className="fixed z-10 left-0 right-0 h-1 bg-white bottom-[100px]"
        style={{ scaleX }}
      />
      <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent h-[400px] w-full"></div>
    </div>
  );
}

export default TopSellers;
