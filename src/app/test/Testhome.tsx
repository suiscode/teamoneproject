"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

function TestPage() {
  const divref = useRef(null);
  const el = divref.current;
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
          //   pin: true,
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
          start: "top 80%",
          scrub: true,
          end: "bottom 90%",
          //   pin: true,
          markers: true,
        },
      }
    );
  }, []);
  return (
    <div className=" w-screen  flex gap-10 relative h-[8000px] text-secondary bg-black">
      <div
        className="w-full h-[700px] flex justify-between top-0 mt-[1000px]"
        ref={divref}
      >
        <h1 className="text-[300px] leading-[250px] text w-[1000px] ">
          Various cars
        </h1>
        <h1 className="text-[300px] leading-[250px] fard w-[1000px] ">
          Darius cars
        </h1>
      </div>
    </div>
  );
}

export default TestPage;
