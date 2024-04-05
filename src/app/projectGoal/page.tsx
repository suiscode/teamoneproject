import React from "react";
import { Stack, Typography } from "@mui/material";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProjectGoal from "../components/projectGoal/ProjectGoal";
import Image from "next/image";
import OurProblemSolving from "../components/projectGoal/OurProblemSolving";
import Impact from "../components/projectGoal/Impact";

function page() {
  return (
    <Stack>
      <Stack sx={{ position: "relative", justifyContent: "center" }}>
        <Stack sx={{ zIndex: 10 }}>
          <Image src="/problem1.jpeg" alt="" width={1800} height={100} />
        </Stack>
        <Stack
          sx={{
            position: "absolute",
            top: 0,
            zIndex: 30,
            width: "1800px",
          }}
        >
          <Header />
          <ProjectGoal />
        </Stack>
      </Stack>
      <Stack>
        <OurProblemSolving />
      </Stack>
      <Stack>
        <Impact />
      </Stack>
      <Footer />
    </Stack>
  );
}

export default page;
