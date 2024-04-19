import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const PaymentMethod = async () => {
  return (
    <div className="w-[896px] h-[668px] bg-gray-400 rounded-[10px] flex flex-col">
      <div className="w-[896px] h-[85px] flex justify-between  ">
        <div className="w-[214px] flex flex-col gap-[6px] mt-[26px] ml-[26px]">
          <div className="text-xl font-bold text-[#1A202C]">Payment Method</div>
          <div className="text-[#90A3BF] text-[14px] font-medium w-[250px]">
            Please enter your payment method
          </div>
        </div>
        <div className="text-[#90A3BF] flex mr-[26px] mt-[59px] text-[14px] font-medium ">
          Step 3 of 4
        </div>
      </div>
      <div className="w-[848px] h-[352px] flex flex-col mt-[24px] ml-[24px] rounded-[10px] bg-[#F6F7F9]">
        <div className="w-[848px] h-[20px] flex justify-between">
          <div className="flex ml-[24px] mt-[24px] text-black">Credit Card</div>
          <div className="text-black flex mt-[24px] mr-[24px] ">Visa</div>
        </div>
        <div className="h-[142px] w-[848px] flex gap-[20px]">
          <div className="text-black flex mt-[40px] ml-[24px] flex-col gap-[20px]">
            Card Number
            <Input className=" w-[372px] h-[56px] flex"></Input>
          </div>

          <div className="text-black flex mt-[40px] ml-[24px] flex-col gap-[20px]">
            Expration Date
            <Input className="w-[372px] h-[56px]"></Input>
          </div>
        </div>
        <div className="h-[142px] w-[848px] flex gap-[20px]">
          <div className="text-black flex mt-[40px] ml-[24px] flex-col gap-[20px]">
            Card Number
            <Input className=" w-[372px] h-[56px] flex"></Input>
          </div>
          <div className="text-black flex mt-[40px] ml-[24px] flex-col gap-[20px]">
            Card Number
            <Input className=" w-[372px] h-[56px] flex"></Input>
          </div>
        </div>
      </div>
      <div className="w-[848px] h-[66px] bg-[#F6F7F9] rounded-[10px] flex mt-[24px] ml-[24px]">
        <div className="flex items-center space-x-2 ml-[26px] text-black">
          <Checkbox className="rounded-[10px]" />
          <Label className="relative left-[10px]" htmlFor="terms">
            PayPal
          </Label>
        </div>
      </div>
      <div className="w-[848px] h-[66px] bg-[#F6F7F9] rounded-[10px] flex mt-[24px] ml-[24px]">
        <div className="flex items-center space-x-2 ml-[26px] text-black">
          <Checkbox className="rounded-[10px]" />
          <Label className="relative left-[10px]" htmlFor="terms">
            Bitcoin
          </Label>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
