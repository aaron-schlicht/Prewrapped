import { signOut } from "next-auth/react";
import { FC, useState } from "react";
import TopGrid from "../topGrid";
import TermButtons from "./TermButtons";
import { motion } from "framer-motion";

interface DashboardProps {
  name: string;
}

export type TimeRange = "short_term" | "medium_term" | "long_term";

const Dashboard: FC<DashboardProps> = ({ name }) => {
  const [time, setTime] = useState<TimeRange>("medium_term");
  return (
    <div>
      <div className="flex justify-between pt-10 px-10">
        <h1 className="text-5xl font-bold">
          {Boolean(name.length) ? `Hi there, ${name} ` : "Hi there!"}
        </h1>
        <SignOutButton />
      </div>
      <h2 className="px-10 text-2xl text-zinc-400">
        Let&apos;s check out your listening trends
      </h2>
      <TopGrid time={time} />
      <TermButtons time={time} setTime={setTime} />
    </div>
  );
};

const SignOutButton = () => (
  <motion.button
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.8 }}
    className="bg-spotify-green px-4 h-10 py-2 rounded-3xl"
    onClick={() => signOut()}
  >
    Sign out
  </motion.button>
);

export default Dashboard;
