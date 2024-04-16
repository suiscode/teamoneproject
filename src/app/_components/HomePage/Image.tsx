"use client";
import { useRef } from "react";
import {
  motion,
  useInView,
  useAnimation,
  useScroll,
  MotionValue,
  useTransform,
} from "framer-motion";
import Image from "next/image";

export default function ImageCart({
  image,
  index,
  name,
}: {
  image: string;
  index: number;
  name: string;
}) {
  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 1000);

  const reverse = index % 2 == 0 ? true : false;

  return (
    <section
      className={`flex  px-[5%] z-10 items-center ${
        reverse && "flex-row-reverse"
      }`}
    >
      <div ref={ref}>
        <Image width={800} height={300} src={image} alt="image" />
      </div>
      <motion.h2
        className={`text-black text-[80px] font-semibold mr-[200px] ${
          !reverse ? "ml-[-50px]" : "mr-[-50px]"
        }`}
        style={{ y }}
      >{`#0${index + 1}`}</motion.h2>
      <motion.p
        variants={{
          hidden: { opacity: 0, x: reverse ? 25 : -25 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.5 }}
        className={`text-[100px] text-white ${
          !reverse ? "ml-[100px]" : "mr-[300px]"
        } `}
      >
        {name}
      </motion.p>
    </section>
  );
}
