import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GlobalContextProvider } from "@/app/context/Context";
import Menu from "./Menu";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div className="flex flex-col">
            <Menu />
            {children}
        </div>
  );
}
