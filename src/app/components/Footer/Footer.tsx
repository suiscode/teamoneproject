"use client";
import * as React from "react";

const Footer = () => {
  return (
    <div className="py-20 px-24 flex flex-col bg-white shadow-2xl text-black">
      <div className="flex justify-between">
        <div className="flex flex-col w-72 gap-4">
          <img src="Logo3.png" alt="" className="h-[140px] w-[140px]" />
          <h1>
            Бидний алсын хараа бол дэлхийд үнэлэгдсэн шилдэг Software Developer
            болох.
          </h1>
        </div>
        <div className="flex flex-row justify-between gap-32 mr-14">
          <div className="flex flex-col gap-6">
            <h1 className="text-lg font-semibold">About</h1>
            <a href="#" className="font-base font-normal">
              How it works
            </a>
            <a href="#" className="font-base font-normal">
              Featured
            </a>
            <a href="#" className="font-base font-normal">
              Partnership
            </a>
            <a href="#" className="font-base font-normal">
              Bussiness Relation
            </a>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-lg font-semibold">Community</h1>
            <a href="#" className="font-base font-normal">
              Events
            </a>
            <a href="#" className="font-base font-normal">
              Blog
            </a>
            <a href="#" className="font-base font-normal">
              Podcast
            </a>
            <a href="#" className="font-base font-normal">
              Invite a friends
            </a>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-lg font-semibold">Socials</h1>
            <a href="#" className="font-base font-normal">
              Discord
            </a>
            <a href="#" className="font-base font-normal">
              Instagram
            </a>
            <a href="#" className="font-base font-normal">
              Twitter
            </a>
            <a href="#" className="font-base font-normal">
              Facebook
            </a>
          </div>
        </div>
      </div>
      <div className="border my-16"></div>
      <div className="flex flex-row justify-between">
        <h1 className="text-lg font-semibold">
          ©2024 TEAMONE. All rights reserved
        </h1>
        <div className="flex flex-row gap-10">
          <a href="#" className="text-base font-medium">
            Privacy & Policy
          </a>
          <a href="#" className="text-base font-medium">
            Terms & Condition
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
