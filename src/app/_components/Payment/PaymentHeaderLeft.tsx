"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PaymentHeaderLeft = () => {
  return (
    <>
      <div className="flex items-center gap-4">
        <Link href="/">
          <Image src="/ASD2.png" alt="logo" width={50} height={50} />
        </Link>
      </div>
    </>
  );
};
export default PaymentHeaderLeft;
