import React from "react";
import { Stack, Typography, Button } from "@mui/material";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";

function CardDetail() {
  return (
    <Stack
      direction="row"
      sx={{ alignItems: "center", justifyContent: "center", gap: "30px" }}
    >
      <Stack sx={{ gap: "24px" }}>
        <Stack>
          <Image
            src="/download.jpeg"
            alt=""
            width={492}
            height={360}
            className="rounded-xl"
          />
        </Stack>
        <Stack direction="row" sx={{ gap: "24px" }}>
          <Image
            src="/download.jpeg"
            alt=""
            width={148}
            height={124}
            className="rounded-xl"
          />
          <Image
            src="/download.jpeg"
            alt=""
            width={148}
            height={124}
            className="rounded-xl"
          />
          <Image
            src="/download.jpeg"
            alt=""
            width={148}
            height={124}
            className="rounded-xl"
          />
        </Stack>
      </Stack>

      <Stack
        sx={{
          bgcolor: "#F6F7F9",
          padding: "20px",
          width: "492px",
          height: "508px",
        }}
      >
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Stack>
            <Typography sx={{ fontSize: "32px" }}>Car Name</Typography>
          </Stack>
          <Stack>
            <FaRegHeart />
          </Stack>
        </Stack>
        <Stack sx={{ width: "400px", height: "120px", mt: "20px" }}>
          <Typography sx={{ color: "#596780", fontSize: "20px" }}>
            NISMO has become the embodiment of Nissan's outstanding performance,
            inspired by the most unforgiving proving ground, the "race track".
          </Typography>
        </Stack>
        <Stack direction="row" sx={{ gap: "60px", mt: "40px" }}>
          <Stack direction="row" sx={{ gap: "20px" }}>
            <Stack sx={{ gap: "10px" }}>
              <Typography sx={{ fontSize: "20px", color: "#90A3BF" }}>
                Type Car
              </Typography>
              <Typography sx={{ fontSize: "20px", color: "#90A3BF" }}>
                Steering
              </Typography>
            </Stack>
            <Stack sx={{ gap: "10px" }}>
              <Typography sx={{ fontSize: "20px", color: "#596780" }}>
                Sport
              </Typography>
              <Typography sx={{ fontSize: "20px", color: "#596780" }}>
                Manual
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" sx={{ gap: "20px" }}>
            <Stack sx={{ gap: "10px" }}>
              <Typography sx={{ fontSize: "20px", color: "#90A3BF" }}>
                Capacity
              </Typography>
              <Typography sx={{ fontSize: "20px", color: "#90A3BF" }}>
                Gasoline
              </Typography>
            </Stack>
            <Stack sx={{ gap: "10px" }}>
              <Typography sx={{ fontSize: "20px", color: "#596780" }}>
                2 Person
              </Typography>
              <Typography sx={{ fontSize: "20px", color: "#596780" }}>
                70L
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" sx={{ mt: "50px", gap: "150px" }}>
          <Stack>
            <Stack direction="row">
              <Typography sx={{ fontSize: "28px" }}>$80.00/</Typography>
              <Typography sx={{ fontSize: "20px", mt: "5px" }}>days</Typography>
            </Stack>
            <Stack sx={{ fontSize: "20px" }}>$100.00</Stack>
          </Stack>
          <Stack>
            <button className="rounded-lg bg-[#3563E9] w-[140px] h-[56px] text-[white]">
              Rent Now
            </button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default CardDetail;
