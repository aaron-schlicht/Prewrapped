import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthSessionProvider from "@/components/auth/AuthSessionProvider";
import { getServerSession } from "next-auth";
import authOptions from "./api/auth/[...nextauth]/authOptions";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify Dashboard",
  description: "Spotify User Stats Dashboard",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <head />
      <AuthSessionProvider session={session}>
        <body className={inter.className}>{children}</body>
      </AuthSessionProvider>
    </html>
  );
}
