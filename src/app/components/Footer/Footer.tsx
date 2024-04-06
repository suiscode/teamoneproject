"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Footer = () => {
  const { push } = useRouter();

  const Social = [
    { title: "Discord" },
    { title: "Instagram" },
    { title: "Twitter" },
    { title: "Facebook" },
  ];

  return (
    <div className="w-full bg-black text-secondary justify-center flex">
      <div className="w-[1440px] justify-between flex  py-8">
        <div className="flex flex-col w-72 gap-4">
          <div className="relative w-[280px] h-[80px]">
            <Image src="/ASD.png" alt="footer" fill className="absolute" />
          </div>
          <h1>
            Our vision is to become the world&apos;s best software developer.
          </h1>
        </div>
        <div className="flex flex-row gap-48">
          <div className="space-y-2">
            <h1 className="text-xl font-semibold">About</h1>
            <ul className="space-y-2">
              <li>
                <Link href="/aboutUs" className="font-base text-sm">
                  Team member
                </Link>
              </li>
              <li>
                <Link href="/projectGoal" className="font-base text-sm">
                  About project
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h1 className="text-xl font-bold">Socials</h1>
            <ul className="space-y-2">
              {Social.map(({ title }, index) => {
                return (
                  <li key={index}>
                    <Link
                      className="cursor-pointer font-base text-sm hover:text-secondary/60"
                      href="#"
                    >
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
