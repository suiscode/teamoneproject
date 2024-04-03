"use client";
import React from "react";
import { FaCar } from "react-icons/fa";
import { IoPeopleCircle } from "react-icons/io5";
import { ImLocation2 } from "react-icons/im";
import Image from "next/image";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@mui/material";
import { CalendarIcon } from "@radix-ui/react-icons";
import { cn } from "@lib/utils";
import { format } from "date-fns";
import Link from "next/link";

export const ThirdPage = () => {
  const [date, setDate] = React.useState<Date>();
  const transitionValues = {
    duration: 0.8,
    yoyo: Infinity,
    ease: "easeOut",
  };

  const ballStyle = {
    display: "block",
    width: "5rem",
    height: "5rem",
    backgroundColor: "white",
    borderRadius: "5rem",
    marginRight: "auto",
    marginLeft: "auto",
  };
  type ballStyle = {
    display: string;
    width: string;
    height: string;
    backgroundColor: string;
    borderRadius: string;
    marginRight: string;
    marginLeft: string;
  };
  return (
    <div className="w-full flex-col relative justify-center items-center flex h-[1080px] gap-10 py-[360px] bg-[#0b0b0b]">
      <div
        id="thirdBack"
        className="w-[90%] h-[1080px] bg-[#1b1b1b] absolute z-2"
      ></div>
      <div className="absolute z-3 ">
        <Image
          src={"/redcar.webp"}
          width={1200}
          height={400}
          alt="car"
          className="rounded-full"
        />
      </div>
      <div className="absolute z-4 text-6xl top-[18%] text-[#e6e6e6] w-[900px] text-center font-mono">
        <h1>Feel the best experience with our rental deals</h1>
      </div>

      <div className="animate-bounce delay-150 absolute z-5 w-72 h-72 backdrop-blur-lg rounded-full flex flex-col items-center justify-center left-[13%] bottom-[20%] border">
        <div className="text-xl flex flex-col items-center gap-3 ">
          <div className="text-3xl">
            <FaMoneyCheckDollar />
          </div>
<<<<<<< HEAD
          Deals for every budget
          <p className="text-sm">Incredible price</p>
=======
          Explore Cars
        </div>
        <div onClick={handlePush} className="flex flex-col items-center gap-8 ">
          <div className="text-4xl">
            <IoPeopleCircle />
          </div>
          About us
        </div>
        <div className="flex flex-col items-center gap-8 ">
          <div className="text-4xl">
            <ImLocation2 />
          </div>
          Our address
>>>>>>> 458bdca (4-3 hiiv bilegt)
        </div>
      </div>

      <div className="absolute animate-bounce delay-75 z-5 left-[33%] bottom-2 w-72 h-72 backdrop-blur-xl rounded-full flex flex-col items-center justify-center border">
        <div className="text-xl flex flex-col items-center gap-3 ">
          <div className="text-3xl">
            <ImLocation2 />
          </div>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                className={cn(
                  "w-fit justify-start text-left font-normal text-white",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4 " color="white" />
                {date ? (
                  format(date, "PPP")
                ) : (
                  <span className="text-white">Pick-up Date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          <p className="text-sm">Choose your rent date</p>
        </div>
      </div>
      <div className=" animate-bounce absolute delay-150 z-5 left-[53%] bottom-5 w-72 h-72 backdrop-blur-lg rounded-full flex flex-col items-center justify-center border">
        <div className="text-xl flex flex-col items-center gap-3 ">
          <div className="text-3xl">
            <ImLocation2 />
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className={cn(
                  "w-fit justify-start text-left font-normal text-white",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4 " color="white" />
                {date ? (
                  format(date, "PPP")
                ) : (
                  <span className="text-white">Return Date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <p className="text-sm">Choose your return date</p>
        </div>
      </div>
      <Link href={"/cars"}>
        <div className=" animate-bounce delay-75 absolute z-5 right-[13%] bottom-[20%] w-72 h-72 backdrop-blur-lg rounded-full flex flex-col items-center justify-center border">
          <div className="text-xl flex flex-col items-center gap-3 ">
            <div className="text-3xl">
              <FaCar />
            </div>
            Press here
            <p className="text-sm">Find the most suitable car for you</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
