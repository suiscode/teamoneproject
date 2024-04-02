"use client";

import { SessionProvider } from "next-auth/react";

export const AuthProdiver = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <SessionProvider>{children}</SessionProvider>;
};
