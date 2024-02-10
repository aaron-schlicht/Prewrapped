import { TimeRange } from "./Dashboard";
import { Dispatch, SetStateAction } from "react";
import { motion, Variants } from "framer-motion";

const variants: Variants = {
  initial: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
  },
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
      <motion.button
        whileHover="hover"
        onClick={() => setTime("short_term")}
        className="mx-10"
      >
        <p>This month</p>
        <motion.div
          variants={variants}
          animate={{ opacity: time === "short_term" ? 1 : 0 }}
          className="h-1 bg-spotify-green rounded-md"
        />
      </motion.button>
      <motion.button
        whileHover="hover"
        onClick={() => setTime("medium_term")}
        className="mx-10"
      >
        <p>Past 6 months</p>
        <motion.div
          variants={variants}
          animate={{ opacity: time === "medium_term" ? 1 : 0 }}
          className="h-1 bg-spotify-green rounded-md"
        />
      </motion.button>
      <motion.button
        whileHover="hover"
        onClick={() => setTime("long_term")}
        className="mx-10"
      >
        <p>All time</p>
        <motion.div
          variants={variants}
          animate={{ opacity: time === "long_term" ? 1 : 0 }}
          className="h-1 bg-spotify-green rounded-md"
        />
      </motion.button>
    </div>
  );
};

export default TermButtons;
