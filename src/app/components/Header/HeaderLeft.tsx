import Image from "next/image";
import Link from "next/link";

const HeaderLeft = () => {
  return (
    <div className="flex items-center flex-row justify-center gap-8 relative">
      <Image src="/ASD2.png" alt="logo" width={80} height={80}/>
    </div>
  );
};
export default HeaderLeft;
