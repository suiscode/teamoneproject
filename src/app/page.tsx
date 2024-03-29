import Image from "next/image";
import LandingPage from "./components/HomePage/LandingPage";
import SecondPage from "./components/HomePage/SecondPage";
import HomeHeader from "./components/HomePage/HomeHeader";

export default function Home() {
  return (
    <div className="w-screen flex items-center justify-center flex-col z-10 text-white">
      <HomeHeader/>
      <LandingPage />
      <SecondPage />

    </div>
  );
}
