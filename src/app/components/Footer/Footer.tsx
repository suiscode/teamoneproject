"use client";
import { Stack } from "@mui/material";
import { useRouter } from "next/navigation";

const Footer = () => {
  const { push } = useRouter();

  const handlePushToAboutUs = () => {
    push("/aboutUs");
  };

  const handlePushToProjectGoal = () => {
    push("/projectGoal");
  };

  const Social = [
    { title: "Discord" },
    { title: "Instagram" },
    { title: "Twitter" },
    { title: "Facebook" },
  ];

  return (
    <Stack
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      fontSize={18}
      paddingBottom={10}
      paddingTop={10}
      bgcolor={"#000"}
      color={"white"}
    >
      <div className="flex flex-col w-72 gap-4 ml-10">
        <img src="ASD.png" alt="" className="h-[90px] w-[300px]" />
        <h1>
          Our vision is to become the world&apos;s best software developer.
        </h1>
      </div>
      <div className="flex flex-row gap-48">
        <div className="flex flex-col gap-6">
          <h1 className="text-xl font-semibold">About</h1>
          <h1 onClick={handlePushToAboutUs} className="font-base font-normal">
            Team member
          </h1>
          <h1
            onClick={handlePushToProjectGoal}
            className="font-base font-normal"
          >
            About project
          </h1>
        </div>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
          }}
        >
          <Stack sx={{ fontSize: "20px", fontWeight: 600 }}>Social</Stack>
          {Social.map(({ title }, index) => {
            return (
              <Stack key={index}>
                <a href="#">
                  <div className="flex items-center pr-16">{title}</div>
                </a>
              </Stack>
            );
          })}
        </Stack>
      </div>
    </Stack>
  );
};

export default Footer;
