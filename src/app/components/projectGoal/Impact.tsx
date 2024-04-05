import React from "react";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { posix } from "path";
import { FaArrowDown } from "react-icons/fa6";

function Impact() {
  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid white",
      }}
    >
      <Stack sx={{ position: "relative" }}>
        <Stack>
          <Image src="/naturalCar.jpeg" alt="" width={1800} height={500} />
        </Stack>

        <Stack
          sx={{
            position: "absolute",
            top: 50,
            left: 50,
            alignItems: "center",
            justifyContent: "center",
            gap: "150px",
          }}
        >
          <Stack>
            <Typography
              sx={{
                fontSize: "30px",
                ml: "400px",
                bgcolor: "white",
                padding: "15px",
                borderRadius: "7px",
                mt: "150px",
                width: "240px",
              }}
            >
              Product Impact
              <FaArrowDown className="ml-[90px]" />
            </Typography>
          </Stack>
          <Stack>
            <Typography
              sx={{
                color: "#E4E4E4",
                width: "920px",
                fontSize: "25px",
                ml: "400px",
                // bgcolor: "white",
                padding: "30px",
                borderRadius: "35%",
              }}
            >
              Бид машин зардаг байгууллагуудтай хамтран машин түрээслэх бөгөөд
              хохирол гэмтэл гарсан тохиолдолд түрээслэгч бүрэн хариуцаж
              барьцааны мөнгийг мөн манай байгууллагаас суутгаж авах болно.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Impact;
