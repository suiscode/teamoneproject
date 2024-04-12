"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function SecondPage() {
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
      className="w-full flex-col z-40 relative justify-between  flex h-[1400px] gap-10 py-[60px]"
      style={{
        backgroundImage: 'url("/carr.jpeg")',
        backgroundSize: "cover",
      }}
    >
      <div className="absolute w-full h-1/3 z-10 bg-gradient-to-b from-black via-black to-transparent top-0"></div>
      <div className="z-50 flex flex-col gap-8">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-5xl font-bold z-50 text-white  w-1/2 ml-[120px]"
        >
          Discover the freedom of the open road with DriveAway Car Rentals.
        </motion.div>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.75 }}
          className="text-3xl ml-[120px] z-50 w-1/2 flex"
        >
          Whether you&apos;re embarking on a cross-country adventure or simply
          need reliable transportation for your daily commute, our fleet of
          top-quality vehicles has you covered.
        </motion.p>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          className="z-50"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Link href={"/cars"} className="z-50">
            <button className="w-[12%] ml-[120px] z-50 flex justify-center hover:text-xl transition-all duration-800 items-center gap-8 border-2 rounded-xl px-8 py-4 hover:bg-white hover:text-black hover:border-black">
              Discover more
            </button>
          </Link>
        </motion.div>
      </div>

      <div className="absolute w-full h-1/6 z-10 bg-gradient-to-t from-black to-transparent bottom-0"></div>
    </div>
  );
}

export default SecondPage;
