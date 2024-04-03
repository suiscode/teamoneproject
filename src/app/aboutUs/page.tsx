import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import AboutUs from "../components/aboutUs/AboutUs";
import React from "react";
import { Stack, Typography } from "@mui/material";

function page() {
  return (
    <Stack>
      <Header />
      <AboutUs />
      <Footer />
    </Stack>
  );
}

export default page;
