"use client";
import React from "react";
import { Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa6";
import { motion, useScroll } from "framer-motion";

function ProjectGoal() {
  const { scrollYProgress } = useScroll();

  return (
    <Stack sx={{ width: "screen", py: "50px" }}>
      <Stack>
        <Stack sx={{ position: "relative" }}>
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: [0, -5, 5, -5, 5, 0],
              transition: { duration: 0.4 },
            }}
          >
            <Stack
              sx={{
                position: "absolute",
                border: "3px solid black",
                top: 400,
                left: 820,
                width: "150px",
                padding: "10px",
                fontSize: "28px",
                borderRadius: "5px",
                color: "#3B92DB",
              }}
            >
              Problems
            </Stack>
          </motion.div>

          <Stack
            sx={{
              zIndex: 20,
              position: "absolute",
              top: 500,
              left: 500,
              width: "800px",
              bgcolor: "#565656",
              padding: "23px",
              borderRadius: "10px",
            }}
          >
            <Typography sx={{ fontSize: "23px", color: "white" }}>
              Яаралтай үед машин хэрэг болоход найдвартай, баталгаатай, үнийн
              хувьд боломжийн мөн цаг хугацааны хувьд уян хатан машиныг хүн
              бүхэн хайж эхэлдэг боловч фэйсбүүк зэрэг сошиал медиагаас
              баталгаатай, үнийн хувьд тохирсон машин олоход хэцүү байдаг.
            </Typography>
          </Stack>

          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: [-5, 5, -5, 0],
              transition: { duration: 0.4 },
            }}
            animate={{
              scale: [1, 1, 1, 1, 1],
              rotate: [0],
            }}
          >
            <Stack
              sx={{
                position: "absolute",
                border: "2px solid black",
                top: 900,
                left: 750,
                width: "300px",
                padding: "10px",
                fontSize: "28px",
                borderRadius: "5px",
                bgcolor: "white",
              }}
            >
              Our problem solving <FaArrowDown className="ml-[115px]" />
            </Stack>
          </motion.div>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default ProjectGoal;
