"use client";
import * as React from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const Review = () => {
  const [value, setValue] = React.useState<number | null>(0);
  return (
    <div className="bg-white w-auto rounded-2xl shadow-lg flex flex-col justify-center items-center">
      <div className="rounded-2xl p-6 flex flex-row gap-3 items-center justify-start">
        <h1 className="text-xl">Reviews</h1>
        <div className="w-14 flex flex-col justify-center items-center rounded-lg bg-[#3563E9] text-white">
          <h1 className="text-lg">13</h1>
        </div>
      </div>
      <div className="p-5 flex gap-3">
        <div className="border border-black rounded-full h-[56px] p-7"></div>
        <div className="w-full flex flex-col gap-4">
          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <h1 className="text-xl font-semibold">Alex Stanton</h1>
              <h1 className="text-[#90A3BF] font-light text-base">
                CEO at Bykalapak
              </h1>
            </div>
            <div className="flex items-end flex-col gap-1">
              <h1 className="text-[#90A3BF] font-light text-base">
                21 July 2023
              </h1>
              {/* <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              /> */}
            </div>
          </div>
          <h1 className="font-normal text-lg text-[#596780]">
            We are very happy with the service from the MORENT App. Morent has a
            low price and also a large variety of cars with good and comfortable
            facilities. In addition, the service provided by the officers is
            also very friendly and very polite.
          </h1>
        </div>
      </div>
      <div className="p-5 flex gap-3">
        <div className="border border-black rounded-full h-[56px] p-7"></div>
        <div className="w-full flex flex-col gap-4">
          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <h1 className="text-xl font-semibold">Skylar Dias</h1>
              <h1 className="text-[#90A3BF] font-light text-base">
                CEO at Amazon
              </h1>
            </div>
            <div className="flex items-end flex-col gap-1">
              <h1 className="text-[#90A3BF] font-light text-base">
                20 July 2023
              </h1>
              {/* <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              /> */}
            </div>
          </div>
          <h1 className="font-normal text-lg text-[#596780]">
            We are very happy with the service from the MORENT App. Morent has a
            low price and also a large variety of cars with good and comfortable
            facilities. In addition, the service provided by the officers is
            also very friendly and very polite.
          </h1>
        </div>
      </div>
      <div className="p-[20px]">
        <button className="flex items-center justify-center text-[#90A3BF] gap-2">
          Show All <RiArrowDownSLine className="h-[25px] w-[25px]" />
        </button>
      </div>
    </div>
  );
};
export default Review;
