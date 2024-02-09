"use client";
import { signIn } from "next-auth/react";

const LoginButton = () => {
  const handleLogin = async () => {
    signIn("spotify", { callbackUrl: "/" });
  };
  return (
    <button
      className="bg-green-600 py-2 px-4 text-white rounded-xl"
      onClick={handleLogin}
    >
      Login With Spotify
    </button>
  );
};

export default LoginButton;
