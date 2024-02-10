"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="flex items-center">
        <motion.h1
          initial={{ opacity: 0, y: -40, scale: 0.7 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 10,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className="font-black text-5xl text-spotify-green"
        >
          Pre
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 10,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className="font-medium text-5xl"
        >
          wrapped
        </motion.h1>
      </div>
      <div className="flex gap-2 items-center py-4">
        <h3>Powered by </h3>
        <Image
          src="/Spotify_Logo_CMYK_Green.png"
          alt="Spotify Logo"
          width={100}
          height={50}
        />
      </div>
      <div className="mt-20">
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className="bg-spotify-green px-6 py-2 rounded-3xl"
          onClick={() => signIn("spotify")}
        >
          <div className="flex items-center gap-2">
            Sign in with
            <Image
              src="/Spotify_Icon_CMYK_White.png"
              alt="Spotify Icon"
              width={20}
              height={20}
            />
          </div>
        </motion.button>
      </div>
    </div>
  );
};

export default Login;
