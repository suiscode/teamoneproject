import type { Metadata } from "next";
import Header from "../_components/Header/Header";
import Footer from "@/app/_components/Footer/Footer";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "./Navbar";

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
    <div className="w-screen flex flex-col justify-between bg-black min-h-screen">
      <Header />
      <div id="cars" className="w-full flex  justify-center px-4 py-4 h-full">
        <div className="w-[1440px] py-12 flex justify-between">
          <Navbar />
          {children}
        </div>
      </div>
      <Toaster />
      <Footer />
    </div>
  );
}