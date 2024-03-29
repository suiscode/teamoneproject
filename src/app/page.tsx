import Image from "next/image";
import LandingPage from "./components/HomePage/LandingPage";

export default function Home() {
  return (
    <div className="w-screen flex items-center justify-center">
      <LandingPage />
    </div>
  );
}
