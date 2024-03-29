import HeaderLeft from "./HeaderLeft";
import HeaderMiddle from "./HeaderMiddle";
import HeaderRight from "./HeaderRight";

const Header = () => {
  return (
    <div className="flex items-center h-[140px] px-12 justify-between shadow-2xl bg-white text-black">
      <HeaderLeft />
      <HeaderMiddle />
      <HeaderRight />
    </div>
  );
};
export default Header;
