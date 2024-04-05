import { IoIosSearch } from "react-icons/io";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import { Input } from "@/components/ui/input";
import { auth } from "../../../../auth";

const Header = async () => {
  return (
    <div className="w-full flex justify-center  h-[80px] sticky top-0 bg-black text-secondary border-b-[0.5px] border-white/50 ">
      <div className="flex items-center justify-between w-[1440px]">
        <HeaderLeft />
        <div className="flex h-4 items-center flex-row rounded-3xl w-1/3  relative">
          <Input
            type="texts"
            placeholder="Search"
            className="w-full px-4 text-black rounded-3xl bg-white outline-none"
          />
          <button className="absolute right-4">
            <IoIosSearch className="h-[18px] text-black w-[18px]" />
          </button>
        </div>
        <HeaderRight />
      </div>
    </div>
  );
};
export default Header;
