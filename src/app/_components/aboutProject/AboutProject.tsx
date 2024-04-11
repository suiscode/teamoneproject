import Image from "next/image";
import React from "react";

function AboutProject() {
  return (
    <div className="flex flex-col gap-[100px] p-[50px]">
      <div className="flex flex-col gap-[50px]">
        <div className="text-[30px] text-white">
          The <span className="text-[red]">Problem Statement</span>
        </div>

        <div className="flex gap-[200px]">
          <Image src="/problems.png" alt="" width={300} height={300} />

          <div className="flex gap-[50px]">
            <div className="relative">
              <div className="w-[50px] h-[50px] bg-[#7981AB] text-[30px] text-center rounded-[50%] z-30 absolute -top-[15px] -left-[15px]">
                1
              </div>
              <div className="flex items-center justify-center w-[300px] h-[130px] bg-[#989898] rounded-md z-10 shadow-2xl p-[20px] text-[18px] hover:bg-white hover:scale-110 ease-in duration-300">
                Can't find a car an emergency
              </div>
            </div>

            <div className="relative mt-[50px]">
              <div className="w-[50px] h-[50px] bg-[#7981AB] text-[30px] text-center rounded-[50%] z-30 absolute -top-[15px] -left-[15px]">
                2
              </div>
              <div className="flex items-center justify-center w-[300px] h-[130px] bg-[#989898] rounded-md z-10 shadow-2xl p-[20px] text-[18px]  hover:bg-white hover:scale-110 ease-in duration-300">
                Most rental cars expensive
              </div>
            </div>

            <div className="relative mt-[100px]">
              <div className="w-[50px] h-[50px] bg-[#7981AB] text-[30px] text-center rounded-[50%] z-30 absolute -top-[15px] -left-[15px]">
                3
              </div>
              <div className="flex justify-center items-center w-[300px] h-[130px] bg-[#989898] rounded-md z-10 shadow-2xl p-[20px] text-[18px]  hover:bg-white hover:scale-110 ease-in duration-300">
                Short-term rental
              </div>
            </div>

            <div className="relative mt-[150px]">
              <div className="w-[50px] h-[50px] bg-[#7981AB] text-[30px] text-center rounded-[50%] z-30 absolute -top-[15px] -left-[15px]">
                4
              </div>
              <div className="flex justify-center items-center w-[300px] h-[130px] bg-[#989898] rounded-md z-10 shadow-2xl p-[20px] text-[18px]  hover:bg-white hover:scale-110 ease-in duration-300">
                There are few car rental apps in Mongolia
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" border-b-2 border-b-gray-100"></div>

      {/* SOLUTION AHAHHAHAHAHAHAHAHH */}

      <div className="flex flex-col gap-[50px]">
        <div className="text-[30px] text-white">
          The <span className="text-[green]">Solution</span>
        </div>

        <div className="flex gap-[190px]">
          <Image
            src="/solution1.png"
            alt=""
            width={300}
            height={300}
            className="rounded-sm"
          />
          <div className="flex gap-[50px]">
            <div className="relative mt-[150px]">
              <div className="w-[50px] h-[50px] bg-[#7981AB] text-[30px] text-center rounded-[50%] z-30 absolute -top-[15px] -left-[15px]">
                1
              </div>
              <div className="flex justify-center items-center w-[300px] h-[130px] bg-[#989898] rounded-md z-10 shadow-2xl p-[20px] text-[18px] hover:bg-white hover:scale-110 ease-in duration-300">
                Find your car fast and save time
              </div>
            </div>

            <div className="relative mt-[100px]">
              <div className="w-[50px] h-[50px] bg-[#7981AB] text-[30px] text-center rounded-[50%] z-30 absolute -top-[15px] -left-[15px]">
                2
              </div>
              <div className="flex justify-center items-center w-[300px] h-[130px] bg-[#989898] rounded-md z-10 shadow-2xl p-[20px] text-[18px] hover:bg-white hover:scale-110 ease-in duration-300">
                Can be rented for a long time at a low price
              </div>
            </div>

            <div className="relative mt-[50px]">
              <div className="w-[50px] h-[50px] bg-[#7981AB] text-[30px] text-center rounded-[50%] z-30 absolute -top-[15px] -left-[15px]">
                3
              </div>
              <div className="flex justify-center items-center w-[300px] h-[130px] bg-[#989898] rounded-md z-10 shadow-2xl p-[20px] text-[18px] hover:bg-white hover:scale-110 ease-in duration-300">
                There are many types of cars to choose from
              </div>
            </div>

            <div className="relative">
              <div className="w-[50px] h-[50px] bg-[#7981AB] text-[30px] text-center rounded-[50%] z-30 absolute -top-[15px] -left-[15px]">
                4
              </div>
              <div className="flex justify-center items-center w-[300px] h-[130px] bg-[#989898] rounded-md z-10 shadow-2xl p-[20px] text-[18px] hover:bg-white hover:scale-110 ease-in duration-300">
                Using our app will give you a guaranteed feeling
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;
