import { Track } from "@spotify/web-api-ts-sdk";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

//Expanded Grid View of Top Tracks
export const TrackViewExpanded = ({ topTracks }: { topTracks: Track[] }) => {
  return (
    <div className="h-full grid grid-cols-3 lg:grid-cols-5 py-4 overflow-y-scroll">
      {topTracks.map((track) => {
        return (
          <AnimatePresence mode="popLayout">
            <motion.div
              key={`track-${track.id}`}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring" }}
              whileHover={{ scale: 1.1 }}
              className="gap-2 px-4 py-2 items-center cursor-pointer flex flex-col justify-start rounded-x"
            >
              <Image
                src={track.album.images[0].url}
                alt={`album-image-${track.id}`}
                width={150}
                height={150}
                className="max-w-full aspect-square object-cover"
              />
              <p className="overflow-hidden text-ellipsis line-clamp-2 font-semibold text-center lg:text-sm text-xs">
                {track.name}
              </p>
            </motion.div>
          </AnimatePresence>
        );
      })}
    </div>
  );
};

//Minimized List View of Top Tracks
export const TrackViewList = ({ topTracks }: { topTracks: Track[] }) => {
  return (
    <div className="h-full overflow-y-scroll">
      <ul className="h-full flex flex-col justify-between">
        {topTracks.slice(0, 5).map((track, index) => {
          return (
            <li
              key={`track-${track.id}`}
              className={`flex gap-2 px-4 py-2 items-center h-full rounded-xl ${
                index % 2 === 0 ? "bg-zinc-900" : "bg-transparent"
              }`}
            >
              <p className="font-bold ">
                {index + 1}
                {`. `}
              </p>
              <Image
                src={track.album.images[0].url}
                alt={`album-image-${track.id}`}
                width={40}
                height={40}
                className="max-w-full aspect-square object-cover"
              />
              <p className="overflow-hidden text-ellipsis line-clamp-1 ">
                {track.name}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
