"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function TestPage() {
  const box = useRef<HTMLDivElement>(null);
  const box2 = useRef(null);
  useEffect(() => {
    gsap.to(box.current, {
      x: 700,
      scrollTrigger: {
        trigger: box.current,
        scrub: true,
        markers: true,
        pin: '',
        start: "top 80%",
        end: () => `+=${box.current?.offsetHeight ?? 0}`,
        invalidateOnRefresh: true, //
      },
    });
  }, []);
  return (
    <div className="w-screen">
      <div className="h-screen bg-pink-500"></div>
      <div className="h-screen bg-gray-400 wow">
        <div className="w-[150px] h-[150px] bg-green-500" ref={box}></div>
      </div>
    </div>
  );
}

export default TestPage;
