import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Define the options for locations and names
const locationOptions = [
  { value: "Ulaanbaatar", label: "Ulaanbaatar" },
  { value: "Darkhan", label: "Darkhan" },
  { value: "Erdenet", label: "Erdenet" },
  { value: "Ulaangom", label: "Ulaangom" },
];

const nameOptions = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
  { value: "4", label: "Option 4" },
];

const RentalInfo = () => {
  return (
    <div className="w-[896px] bg-white h-[672px] rounded-[10px] flex flex-col gap-[30px]">
      <div className="h-[85px] w-full flex justify-between ">
        <div className="w-[214px] flex flex-col ml-[24px] mt-[24px] gap-[6px]">
          <div className="text-black text-xl font-bold">Rental Info</div>
          <div className="text-[#90A3BF] text-[14px] font-medium">
            Please select your rental date
          </div>
        </div>
        <div className="text-[#90A3BF] text-[14px] font-medium flex mr-[26px] mt-[59px]">
          Step 2 of 3
        </div>
      </div>
      <div className="text-black ml-[20px]">Pick Up</div>
      <div className="h-[278.5px] flex gap-[24px] flex-col">
        <div className="h-[92px] flex gap-[10px]">
          <div className="w-[408px] h-[92px] ml-[20px] gap-[16px] flex flex-col">
            <div className="text-[#1A202C]">Location</div>
            <Select>
              <SelectTrigger className="w-[386px] h-[56px] text-[#90A3BF]">
                <SelectValue
                  className="text-[#90A3BF]"
                  placeholder="Select your city"
                />
              </SelectTrigger>
              <SelectContent>
                {locationOptions.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    className="text-black"
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="w-[408px] h-[92px] ml-[24px] gap-[16px] flex flex-col">
            <div className="text-[#1A202C]">Date</div>
            <Select>
              <SelectTrigger className="w-[386px] h-[56px] text-[#90A3BF]">
                <SelectValue
                  className="text-[#90A3BF]"
                  placeholder="Select your date"
                />
              </SelectTrigger>
              <SelectContent>
                {nameOptions.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    className="text-black"
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="h-[92px] flex gap-[10px]">
          <div className="w-[408px] h-[92px] ml-[20px] gap-[16px] flex flex-col">
            <div className="text-[#1A202C]">Time</div>
            <Select>
              <SelectTrigger className="w-[386px] h-[56px] text-[#90A3BF]">
                <SelectValue
                  className="text-[#90A3BF]"
                  placeholder="Select your time"
                />
              </SelectTrigger>
              <SelectContent>
                {/* Map through nameOptions to render SelectItem */}
                {nameOptions.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    className="text-black"
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="text-black ml-[20px]">Drop Off</div>
      <div className="h-[278.5px]">
        <div className="h-[92px] flex gap-[10px]">
          <div className="w-[408px] h-[92px] ml-[20px] gap-[16px] flex flex-col">
            <div className="text-[#1A202C]">Location</div>
            <Select>
              <SelectTrigger className="w-[386px] h-[56px] text-[#90A3BF]">
                <SelectValue
                  className="text-[#90A3BF]"
                  placeholder="Select your city"
                />
              </SelectTrigger>
              <SelectContent>
                {/* Map through locationOptions to render SelectItem */}
                {locationOptions.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    className="text-black"
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="w-[408px] h-[92px] ml-[24px] gap-[16px] flex flex-col">
            <div className="text-[#1A202C]">Date</div>
            <Select>
              <SelectTrigger className="w-[386px] h-[56px] text-[#90A3BF]">
                <SelectValue
                  className="text-[#90A3BF]"
                  placeholder="Select your date"
                />
              </SelectTrigger>
              <SelectContent>
                {/* Map through nameOptions to render SelectItem */}
                {nameOptions.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    className="text-black"
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="h-[92px] flex gap-[10px]">
          <div className="w-[408px] h-[92px] ml-[20px] gap-[16px] flex flex-col">
            <div className="text-[#1A202C]">Time</div>
            <Select>
              <SelectTrigger className="w-[386px] h-[56px] text-[#90A3BF]">
                <SelectValue
                  className="text-[#90A3BF]"
                  placeholder="Select your time"
                />
              </SelectTrigger>
              <SelectContent>
                {/* Map through nameOptions to render SelectItem */}
                {nameOptions.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    className="text-black"
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalInfo;
