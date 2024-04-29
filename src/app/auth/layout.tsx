import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";

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
    <div className="w-full video-background relative h-screen overflow-hidden">
      <video
        src="https://pub-9e4a462638ff4a6e89664b9e0dd86ca5.r2.dev/carrental%2Fcarr.mp4"
        autoPlay
        loop
        muted
        className="object-cover w-full h-full bg-black"
      >
        Your browser does not support the video tag.
      </video>
      {children}
      <Toaster />
    </div>
  );
}
