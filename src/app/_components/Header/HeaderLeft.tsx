"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderLeft = () => {
  const pathname = usePathname();
  console.log(pathname);

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
              className={`text-secondary rounded-none ${
                pathname === "/cars" && "underline"
              }`}
            >
              Cars
            </Button>
          </Link>
        </ul>
      </div>
    </>
  );
};
export default HeaderLeft;
