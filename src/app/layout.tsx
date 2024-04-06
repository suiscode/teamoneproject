import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalContextProvider } from "./context/Context";
import { AuthProdiver } from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car rental",
  description: "Car rental website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex justify-center`}>
        <AuthProdiver>
          <GlobalContextProvider>{children}</GlobalContextProvider>
        </AuthProdiver>
      </body>
    </html>
  );
}
