"use client";

import React, { useState, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";

const PaymentBilling = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    address: "",
    townCity: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogData = () => {
    console.log(formData);
  };

  return (
    <div className="bg-[#FFFFFF] w-[896px] h-[358px] rounded-[10px] flex flex-col gap-[30px]">
      <div className="w-[896px] h-[85px] flex justify-between">
        <div className="w-[214px] flex flex-col gap-[6px] mt-[26px] ml-[26px]">
          <div className="text-xl font-bold text-[#1A202C]">Billing Info</div>
          <div className="text-[#90A3BF] text-[14px] font-medium font-">
            Please enter your billing info
          </div>
        </div>
        <div className="text-[#90A3BF] flex mr-[26px] mt-[59px] text-[14px] font-medium ">
          Step 1 of 3
        </div>
      </div>
      <div className="w-[896px] h-[92px] gap-[30px] flex ">
        <div className="w-[408px] h-[92px] ml-[24px] gap-[16px] flex flex-col">
          <div className="text-[#1A202C]">Name</div>
          <Input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Your name"
            className="text-[#1A202C] h-[56px]"
            onChange={handleChange}
          />
        </div>
        <div className="w-[408px] h-[92px] flex flex-col gap-[16px] ">
          <div className="text-[#1A202C]">Phone Number</div>
          <Input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            placeholder="Phone number"
            className="text-[#1A202C] h-[56px]"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="w-[896px] h-[92px] gap-[30px] flex">
        <div className="w-[408px] h-[92px] ml-[24px] gap-[16px] flex flex-col">
          <div className="text-[#1A202C]">Address</div>
          <Input
            type="text"
            name="address"
            value={formData.address}
            placeholder="Address"
            className="text-[#1A202C] h-[56px]"
            onChange={handleChange}
          />
        </div>
        <div className="w-[408px] h-[92px] flex flex-col gap-[16px] ">
          <div className="text-[#1A202C]">Town/City</div>
          <Input
            type="text"
            name="townCity"
            value={formData.townCity}
            placeholder="Town or city"
            className="text-[#1A202C] h-[56px]"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentBilling;
