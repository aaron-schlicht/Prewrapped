"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import useGetTopItems from "./useGetTopItems";
import { ArtistList, GenreList, TrackList } from "./ListItems";
import { ArtistGrid, TrackGrid } from "./GridItems";
import { TimeRange } from "../dashboard/Dashboard";

const TopGrid = ({ time }: { time: TimeRange }) => {
  const [expanded, setExpanded] = useState(2);

  const { topTracks, topArtists, topGenres } = useGetTopItems(time);
  return (
    <div style={{ height: "57vh" }}>
      <div className="flex flex-row items-center justify-center p-4">
        <GridItem
          label="Top Songs"
          expanded={expanded}
          setExpanded={setExpanded}
          i={1}
        >
          {expanded === 1 ? (
            <TrackGrid topTracks={topTracks} />
          ) : (
            <TrackList topTracks={topTracks} />
          )}
        </GridItem>
        <GridItem
          label="Top Artists"
          expanded={expanded}
          setExpanded={setExpanded}
          i={2}
        >
          {expanded === 2 ? (
            <ArtistGrid topArtists={topArtists} />
          ) : (
            <ArtistList topArtists={topArtists} />
          )}
        </GridItem>
      </div>
    </div>
  );
};

const GridItem = ({
  expanded,
  setExpanded,
  i,
  label,
  children,
}: {
  expanded: number;
  setExpanded: any;
  i: number;
  label: string;
  children?: React.ReactNode;
}) => {
  return (
    <motion.div
      onMouseEnter={() => setExpanded(i)}
      animate={{
        width: expanded === i ? "70%" : "28%",
        height: expanded === i ? "55vh" : "50vh",
      }}
      className="mx-2"
    >
      <h1 className="p-2 font-bold text-2xl">{label}</h1>
      <div
        className={`p-2 rounded-xl bg-zinc-800 border-zinc-400 border-2 w-full h-full`}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default TopGrid;
