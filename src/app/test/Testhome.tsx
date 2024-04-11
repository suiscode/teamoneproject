"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

function TestPage() {
  useEffect(() => {
    gsap.fromTo(
      ".text",
      { x: "1000px" },
      {
        x: "0px",
        scrollTrigger: {
          trigger: ".text",
          start: "top 80%",
          scrub: true,
          end: "bottom 90%",
          pin: ".box",
          markers: true,
        },
      }
    );
    gsap.fromTo(
      ".fard",
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: ".fard",
          start: "15% 80%",
          scrub: true,
          end: "bottom 90%",
          pin: ".text",
          markers: true,
        },
      }
    );
  }, []);
  return (
    <>
      <div className=" w-screen border-2 box border-white flex gap-10 h-[2000px] text-secondary bg-black">
        <h1 className="text-[300px] leading-[250px] text w-[1000px] ">
          Wide variety of cars
        </h1>
        {/* <h1 className="text-[300px] leading-[250px] rotate-90 fard w-[1000px] ">
          Darius cars
        </h1> */}
      </div>
      {/* <div className="w-full h-[1000px]"></div> */}
    </>
  );
}

export default TestPage;
