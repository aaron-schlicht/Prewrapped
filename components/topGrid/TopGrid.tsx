"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArtistGrid, TrackGrid } from "./GridItems";
import { TimeRange } from "../dashboard/Dashboard";

//Grid View to render the Top Artists/Tracks for the selected time range
const TopGrid = ({ time }: { time: TimeRange }) => {
  const [expanded, setExpanded] = useState<number>(1);

  //List of grid items to render
  const gridItems = [
    {
      label: "Top Songs",
      component: <TrackGrid time={time} isExpanded={expanded === 0} />,
    },
    {
      label: "Top Artists",
      component: <ArtistGrid time={time} isExpanded={expanded === 1} />,
    },
  ];

  return (
    <div style={{ height: "57vh" }}>
      <div className="flex flex-row items-center justify-center p-4">
        {gridItems.map(({ label, component }, index) => (
          <GridItem
            label={label}
            setExpanded={() => setExpanded(index)}
            isExpanded={expanded === index}
          >
            {component}
          </GridItem>
        ))}
      </div>
    </div>
  );
};

//Grid item container, handles expand/minimize animation
const GridItem = ({
  setExpanded,
  isExpanded,
  label,
  children,
}: {
  setExpanded: () => void;
  isExpanded: boolean;
  label: string;
  children?: React.ReactNode;
}) => {
  return (
    <motion.div
      onMouseEnter={setExpanded}
      animate={{
        width: isExpanded ? "70%" : "28%",
        height: isExpanded ? "55vh" : "50vh",
      }}
      className="mx-2"
    >
      <h1 className="p-2 font-bold text-2xl">{label}</h1>
      <div
        className={`rounded-xl bg-zinc-800 border-zinc-400 border-2 w-full h-full`}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default TopGrid;
