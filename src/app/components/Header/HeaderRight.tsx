import Link from "next/link";
import * as React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

const HeaderRight = () => {
  return (
    <div className="flex flex-row items-center gap-4 pr-11 z-10 w-full justify-between">
      <div className="flex items-center flex-row border border-grey rounded-3xl w-1/2 bg-white relative">
        <input
          type="search"
          placeholder="Search something here"
          className="w-full h-10 pl-4 rounded-3xl bg-gray-300"
        />
        <button className="absolute right-4">
          <IoIosSearch className="h-[24px] w-[24px]" />
        </button>
      </div>
      <div className="flex gap-2 items-center">
        <Link
          href="/cars/favorites"
          className="border rounded-full p-3 bg-white"
        >
          <FaRegHeart className="h-[24px] w-[24px]" />
        </Link>
        <div>
          <button>
            <div className="border border-black p-6 rounded-full bg-white"></div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default HeaderRight;
