"use client";

import { useSession } from "next-auth/react";
import Dashboard from "@/components/dashboard";
import Login from "@/components/auth/Login";

export default function Home() {
  const session = useSession();

  if (!session || session.status !== "authenticated") {
    return <Login />;
  }

  return <Dashboard name={session.data.user?.name || ""} />;
}
