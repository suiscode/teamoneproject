"use client";
import React from "react";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { color } from "framer-motion";
import { motion, useScroll } from "framer-motion";

function OurProblemSolving() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div style={{ scaleX: scrollYProgress }}>
      <Stack sx={{ position: "relative" }}>
        <Stack>
          <Image src="/carRent.webp" alt="" width={1800} height={100} />
        </Stack>
        <Stack sx={{ position: "absolute", top: 750, left: 550 }}>
          <Typography
            sx={{
              color: "black",
              border: "3px solid black",
              padding: "10px",
              borderRadius: "10px",
              fontSize: "25px",
              width: "700px",
              bgcolor: "#F2F2F2",
            }}
          >
            Тиймээс бид түрээслэгчдэд зориулсан бүх нөхцлийг хангасан машин
            түрээсийн вэбсайтыг хийх юм. Тэгснээр таны цаг хугацааг хэмнэх юм.
          </Typography>
        </Stack>
      </Stack>
    </motion.div>
  );
}

export default OurProblemSolving;
