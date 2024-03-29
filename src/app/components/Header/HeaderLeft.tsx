import Image from "next/image";

const HeaderLeft = () => {
  return (
    <div className="flex items-center flex-row justify-center gap-8 relative">
      <Image src="/carlogo.png" alt="logo" width={96} height={96} />
    </div>
  );
};
export default HeaderLeft;
