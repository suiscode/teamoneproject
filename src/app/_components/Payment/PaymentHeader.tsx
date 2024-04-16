"use client";

import { IoIosSearch } from "react-icons/io";
import PaymentHeaderLeft from "./PaymentHeaderLeft";
// import PaymentHeaderRight from "./PaymentHeaderRight";
import { Input } from "@/components/ui/input";
import { auth } from "../../../../auth";

const PaymentHeader = async () => {
  return (
    <div className="w-full flex justify-center  h-[80px] sticky top-0 bg-black text-secondary border-b-[0.5px] border-white/50 z-50">
      <div className="flex items-center justify-between w-[1440px]">
        <PaymentHeaderLeft />
      </div>
    </div>
  );
};
export default PaymentHeader;
