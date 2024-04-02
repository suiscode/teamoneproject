'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [{ label: "Carlist", link: "carlist" }];

function Menu() {

    const pathname = usePathname().split('/').pop()
  return (
    <div className="h-[50px] flex items-center px-10 gap-4">
      <ul>
        {links.map((item) => (
          <Link key={item.label} className={`${pathname === item.link && 'text-blue-600'}`} href={`/admin/${item.link}`}>{item.label}</Link>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
