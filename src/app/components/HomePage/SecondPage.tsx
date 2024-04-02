"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";

function SecondPage() {
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
      className="w-full flex-col relative flex h-[3200px] gap-10 py-[360px]"
      style={{ backgroundImage: 'url("/testbg.jpg")', backgroundSize: "cover" }}
    >
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 25 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-5xl font-bold text-white  w-1/2 ml-[120px]"
      >
        Discover the freedom of the open road with DriveAway Car Rentals.
      </motion.div>

      <p className="text-3xl ml-[120px] w-1/2 flex">
        Whether you&apos;re embarking on a cross-country adventure or simply need
        reliable transportation for your daily commute, our fleet of top-quality
        vehicles has you covered.
      </p>

      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ ease: "linear", duration: 2, x: { duration: 1 } }}
        className="text-5xl font-bold text-white  ml-[120px] pt-[50%]"
      >
        <p>What we drive says a lot about who we are.</p>
        <p>
          There are only two types of people that can drive cars: cowards and
          fools.
        </p>
      </motion.div>
    </div>
  );
}

export default SecondPage;
