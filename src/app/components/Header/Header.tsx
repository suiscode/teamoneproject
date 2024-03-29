import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const Header = () => {
  return (
    <div className="flex items-center h-[124px] px-12 justify-between shadow-2xl bg-white text-black w-full gap-8">
      <HeaderLeft />
      <HeaderRight />
    </div>
  );
};
export default Header;
