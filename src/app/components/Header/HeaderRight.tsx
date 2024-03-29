import * as React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

const HeaderRight = () => {
  return (
    <div className="flex flex-row items-center gap-4 pr-11 z-10">
      <div className="flex items-center flex-row border border-grey rounded-3xl pr-3 bg-white">
        <input
          type="search"
          placeholder="Search something here"
          className="w-96 h-10 pl-4 rounded-3xl"
        />
        <button>
          <IoIosSearch className="h-[24px] w-[24px]" />
        </button>
      </div>
      <div className="border rounded-full p-3 bg-white">
        <FaRegHeart className="h-[24px] w-[24px]" />
      </div>
      <div>
        <button>
          <div className="border border-black p-6 rounded-full bg-white"></div>
        </button>
      </div>
    </div>
  );
};
export default HeaderRight;
