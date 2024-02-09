"use client";

import { signIn, useSession } from "next-auth/react";
import Dashboard from "@/components/dashboard";

export default function Home() {
  const session = useSession();

  if (!session || session.status !== "authenticated") {
    return (
      <div>
        <h1>Spotify Web API Typescript SDK in Next.js</h1>
        <button onClick={() => signIn("spotify")}>Sign in with Spotify</button>
      </div>
    );
  }

  return <Dashboard name={session.data.user?.name || ""} />;
}
