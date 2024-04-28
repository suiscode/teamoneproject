"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { CiCircleInfo } from "react-icons/ci";
import { IoCarSportOutline } from "react-icons/io5";
import { RiSettingsLine } from "react-icons/ri";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="w-[186px] h-[580px] flex flex-col justify-between text-gray-500  ">
      <div className="gap-[20px] w-full pl-2">
        <p className="text-[12px] text-white">M A I N M E N U</p>
        <div
          className={`w-[256px] h-[56px] flex items-center  rounded-lg px-6 gap-[10px] ${
            pathname === "/user/profile" ? "text-white" : ""
          }`}
        >
          <CgProfile className=" w-[24px] h-[24px]" />
          <Link href="/user/profile" className={` text-[16px]`}>
            Profile
          </Link>
        </div>
        <div
          className={`w-[256px] h-[56px] flex items-center  rounded-lg px-6 gap-[10px] ${
            pathname === "/user/dashboard" ? "text-white" : ""
          }`}
        >
          <IoCarSportOutline className=" w-[24px] h-[24px]" />
          <Link
            href="/user/dashboard"
            className={`${
              pathname === "/user/dashboard" ? "text-white" : ""
            } text-[16px]`}
          >
            Dashboard
          </Link>
        </div>
        <p className="text-[12px] pt-10 text-white">P R E F E R E N C E S</p>
        <div className="w-[256px] h-[56px] flex items-center  ] rounded-lg px-6 gap-[10px]">
          <RiSettingsLine className="w-[24px] h-[24px]" />
          <p className="text-[16px] ">Settings</p>
        </div>
        <div className="w-[256px] h-[56px] flex items-center  rounded-lg px-6 gap-[10px]">
          <CiCircleInfo className=" w-[24px] h-[24px]" />
          <p className="text-[16px] ">Help & Center</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
