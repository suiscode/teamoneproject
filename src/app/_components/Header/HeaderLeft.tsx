"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderLeft = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="flex items-center gap-4">
        <Link href="/">
          <Image src="/ASD2.png" alt="logo" width={50} height={50} />
        </Link>
        <ul className="flex">
          <Link href="/cars">
            <Button
              variant="link"
              className={`text-secondary text-md   rounded-none ${
                pathname === "/cars" && "underline"
              }`}
            >
              CARS
            </Button>
          </Link>
        </ul>
      </div>
    </>
  );
};
export default HeaderLeft;
