import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const Header = () => {
  return (
    <div className="flex items-center h-[124px] px-12 justify-between bg-[#000] text-black w-full gap-8 border border-black">
      <HeaderLeft />
      <HeaderRight />
    </div>
  );
};
export default Header;
