import { signOut } from "next-auth/react";
import { Dispatch, FC, SetStateAction, useState } from "react";
import TopGrid from "../topGrid";
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
          {Boolean(name.length) ? `Hi there, ${name} ` : "Hi there!"}{" "}
        </h1>

        <button
          className="bg-green-600 px-4 h-10 py-2  hover:shadow-md hover:shadow-green-800 transition-shadow ease-in-out rounded-xl text-black"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
      <h2 className="px-10 text-2xl">
        Let&apos;s check out your listening trends
      </h2>
      <TopGrid time={time} />
      <TermButtons time={time} setTime={setTime} />
    </div>
  );
};

const TermButtons = ({
  time,
  setTime,
}: {
  time: TimeRange;
  setTime: Dispatch<SetStateAction<TimeRange>>;
}) => {
  return (
    <div className="h-10 items-start mt-20 flex justify-center">
      <button onClick={() => setTime("short_term")} className="mx-10">
        <p>This month</p>
        <motion.div
          animate={{ opacity: time === "short_term" ? 1 : 0 }}
          className="h-1 bg-green-600"
        />
      </button>
      <button onClick={() => setTime("medium_term")} className="mx-10">
        <p>Past 6 months</p>
        <motion.div
          animate={{ opacity: time === "medium_term" ? 1 : 0 }}
          className="h-1 bg-green-600"
        />
      </button>
      <button onClick={() => setTime("long_term")} className="mx-10">
        <p>All time</p>
        <motion.div
          animate={{ opacity: time === "long_term" ? 1 : 0 }}
          className="h-1 bg-green-600"
        />
      </button>
    </div>
  );
};

export default Dashboard;
