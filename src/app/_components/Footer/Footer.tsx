"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const Social = [
    { title: "Discord" },
    { title: "Instagram" },
    { title: "Twitter" },
    { title: "Facebook" },
  ];

  return (
    <div className="w-full bg-black text-secondary justify-center p-8 flex shrink-0">
      <div className="w-[1440px] justify-between flex py-8 sm:p-2 sm:flex sm:justify-center md:flex md:justify-between">
        <div className="flex flex-col w-72 gap-4 sm:hidden md:flex md:flex-col">
          <div className="relative w-64 h-20 shrink-0">
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
                <Link href="/aboutus" className="font-base text-sm">
                  Team members
                </Link>
              </li>
              <li>
                <Link href="/aboutproject" className="font-base text-sm">
                  About project
                </Link>
              </li>
              <li>
                <Link href="/privacypolicy" className="font-base text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/termsofuse" className="font-base text-sm">
                  Terms Of Use
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
