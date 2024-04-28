import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { LoginSchema } from "@/lib/schema";
import { getUserByEmail, getUserById } from "@/lib/user-data";
import { UserRole } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";
import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    // Add your additional properties here:
    firstName?: string | null;
    lastName?: string | null;
    address?: string | null;
    phoneNumber?: string | null;
  }
}

declare module "@auth/core/adapters" {
  interface AdapterUser {
    // Add your additional properties here:
    firstName?: string | null;
    lastName?: string | null;
    address?: string | null;
    phoneNumber?: string | null;
  }
}

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);
        if (validatedFields.success) {
          const { email, password } = validatedFields.data;
          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          const passwordMatch = await bcrypt.compare(password, user.password);
          if (passwordMatch) return user;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "credentials") return true;

      const existingUser = await getUserById(user.id);
      if (!existingUser?.emailVerified) return false;
      return true;
    },

    async session({ token, session }) {
      const existingUser = await getUserById(token.sub);

      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }
      if (token.phoneNumber && session.user) {
        session.user.phoneNumber = token.phoneNumber as string;
      }
      if (token.firstName && session.user) {
        session.user.firstName = token.firstName as string;
      }
      if (token.lastName && session.user) {
        session.user.lastName = token.lastName as string;
      }
      if (token.address && session.user) {
        session.user.address = token.address as string;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      
      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;
      token.role = existingUser.role;
      token.phoneNumber = existingUser.phoneNumber;
      token.firstName = existingUser.firstName;
      token.lastName = existingUser.lastName;
      token.address = existingUser.address;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
} satisfies NextAuthConfig;
