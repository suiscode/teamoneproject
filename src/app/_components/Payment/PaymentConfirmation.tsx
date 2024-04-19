import React from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const PaymentConfirmation: React.FC = () => {
  return (
    <div className="w-[896px] h-[564px] rounded-[10px] bg-[#FFFFFF] flex flex-col gap-[15px]">
      <div className="h-[85px] w-full flex justify-between ">
        <div className="w-[214px] flex flex-col ml-[24px] mt-[24px] gap-[6px]">
          <div className="text-black text-xl font-bold">Confirmation</div>
          <div className="text-[#90A3BF] text-[14px] font-medium w-[500px]">
            We are getting to the end. Just few clicks and your rental is ready!
          </div>
        </div>
        <div className="text-[#90A3BF] text-[14px] font-medium flex mr-[26px] mt-[59px]">
          Step 4 of 4
        </div>
      </div>
      <div className="w-[848px] h-[66px] bg-[#F6F7F9] rounded-[10px] flex mt-[24px] ml-[24px]">
        <div className="flex items-center space-x-2 ml-[26px] text-black">
          <Checkbox className="w-[20px] h-[20px]" />
          <Label className="relative left-[10px]" htmlFor="terms">
            I agree with sending an Marketing and newsletter emails. No spam,
            promised!
          </Label>
        </div>
      </div>
      <div className="w-[848px] h-[66px] bg-[#F6F7F9] rounded-[10px] flex mt-[24px] ml-[24px]">
        <div className="flex items-center space-x-2 ml-[26px] text-black">
          <Checkbox className="w-[20px] h-[20px]" />
          <Label className="relative left-[10px]" htmlFor="terms">
            I agree with sending an Marketing and newsletter emails. No spam,
            promised!
          </Label>
        </div>
      </div>
      <div className="w-[150px] h-[56px] bg-[#3563E9] rounded-[10px] flex ml-[24px] mt-[14px] justify-center items-center">
        Rent now
      </div>
      <div className="w-[572px] h-[110px] flex flex-col gap-[24px] ml-[26px] mt-[20px]">
        <div className="text-black">123</div>
        <div className="text-black">All your data are safe</div>
        <div className="text-[#90A3BF] w-[700px]">
          We are using the most advanced security to provide you the best
          experience ever.
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
