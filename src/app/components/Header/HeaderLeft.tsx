import Image from "next/image";
import Link from "next/link";

const HeaderLeft = () => {
  return (
    <div className="flex items-center flex-row justify-center gap-8 relative">
      <Link href='/cars'>
      
      <Image src="/RentCar.png" alt="logo" width={96} height={96} />
      </Link>
    </div>
  );
};
export default HeaderLeft;
