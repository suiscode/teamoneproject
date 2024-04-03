import React from "react";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";

function AboutUs() {
  const membersData = [
    {
      img: "https://media.zigcdn.com/media/model/2024/Feb/toyota-camry_600x400.jpg",
      title: "hiisn ajil",
      name: "Zoloo",
      about: "person about",
      socials: "Social Links",
    },
    {
      img: "https://media.zigcdn.com/media/model/2024/Feb/toyota-camry_600x400.jpg",
      title: "hiisn ajil",
      name: "Tselmeg",
      about: "person about",
      socials: "Social Links",
    },
    {
      img: "https://media.zigcdn.com/media/model/2024/Feb/toyota-camry_600x400.jpg",
      title: "hiisn ajil",
      name: "Ganaa",
      about: "person about",
      socials: "Social Links",
    },
    {
      img: "https://images01.nicepage.com/c461c07a441a5d220e8feb1a/b2d43da24f4b52ff8a5d69df/vbvb.jpg",
      title: "hiisn ajil",
      name: "Bilegt",
      about: "person about",
      socials: "Social Links",
    },
    {
      img: "https://images01.nicepage.com/c461c07a441a5d220e8feb1a/b2d43da24f4b52ff8a5d69df/vbvb.jpg",
      title: "hiisn ajil",
      name: "Tuguu",
      about: "person about",
      socials: "Social Links",
    },
    {
      img: "https://images01.nicepage.com/c461c07a441a5d220e8feb1a/b2d43da24f4b52ff8a5d69df/vbvb.jpg",
      title: "hiisn ajil",
      name: "Garid",
      about: "Person About",
      socials: "Social Links",
    },
  ];
  return (
    <Stack
      direction="row"
      sx={{ width: "1800px", height: "500px", my: "100px" }}
    >
      {membersData?.map((el, index) => {
        return (
          <Stack
            sx={{
              border: "1px solid red",
              alignItems: "center",
              justifyContent: "center",
              gap: "25px",
              bgcolor: "#BDBDBD",
            }}
            key={index}
          >
            <Image src={el.img} alt="" width={300} height={300} />
            <Typography sx={{ color: "gray" }}>{el.title}</Typography>
            <Typography sx={{ color: "red" }}>{el.name}</Typography>
            <Typography sx={{ color: "black" }}>{el.about}</Typography>
            <Stack sx={{ bgcolor: "green" }}>{el.socials}</Stack>
          </Stack>
        );
      })}
    </Stack>
  );
}

export default AboutUs;
