import React from "react";

function HomeHeader() {
  return (
    <div className="fixed top-0 z-30 bg-black h-[50px] items-center w-full flex justify-center">
      <div className="flex justify-between w-full  mx-[10%]">
        <p>CAR RENT</p>
        <button>Log in</button>
      </div>
    </div>
  );
}

export default HomeHeader;
