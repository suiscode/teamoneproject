"use client";
import { Stack } from "@mui/material";

const Footer = () => {
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
      border={1}
      padding={10}
    >
      <div className="flex flex-col w-72 gap-4">
        <img src="RentCar.png" alt="" className="h-[140px] w-[140px]" />
        <h1>
          Our vision is to become the world&apos;s best software developer.
        </h1>
      </div>
      <div className="flex flex-row gap-6 border border-black">
        <div className="flex flex-col gap-6">
          <h1 className="text-lg font-semibold">About</h1>
          <h1 className="font-base font-normal text-[#13131399]">
            How it works
          </h1>
          <h1 className="font-base font-normal text-[#13131399]">Featured</h1>
          <h1 className="font-base font-normal text-[#13131399]">
            Partnership
          </h1>
          <h1 className="font-base font-normal text-[#13131399]">
            Bussiness Relation
          </h1>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-lg font-semibold">Community</h1>
          <h1 className="font-base font-normal text-[#13131399]">Events</h1>
          <h1 className="font-base font-normal text-[#13131399]">Blog</h1>
          <h1 className="font-base font-normal text-[#13131399]">Podcast</h1>
          <h1 className="font-base font-normal text-[#13131399]">
            Invite a friends
          </h1>
        </div>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
          }}
        >
          <Stack sx={{ fontSize: "18px", fontWeight: 600 }}>Social</Stack>
          {Social.map(({ title }, index) => {
            return (
              <Stack key={index}>
                <a href="#">
                  <div className="flex items-center pr-16 text-[#13131399]">
                    {title}
                  </div>
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
