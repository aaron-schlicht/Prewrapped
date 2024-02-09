import { Track, Artist } from "@spotify/web-api-ts-sdk";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export const TrackGrid = ({ topTracks }: { topTracks: Track[] }) => {
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

export const ArtistGrid = ({ topArtists }: { topArtists: Artist[] }) => {
  return (
    <div className="h-full grid grid-cols-3 lg:grid-cols-5 overflow-y-scroll py-4">
      {topArtists.map((artist) => {
        return (
          <AnimatePresence mode="popLayout">
            <motion.div
              key={`artist-${artist.id}`}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring" }}
              whileHover={{ scale: 1.1 }}
              className="gap-2 px-4 py-2 items-center cursor-pointer flex flex-col justify-start rounded-x"
            >
              <Image
                src={artist.images[0].url}
                alt={`artist-image-${artist.id}`}
                width={150}
                height={150}
                className="max-w-full aspect-square rounded-full object-cover"
              />
              <p className="overflow-hidden text-ellipsis line-clamp-2 font-semibold text-center lg:text-sm text-xs">
                {artist.name}
              </p>
            </motion.div>
          </AnimatePresence>
        );
      })}
    </div>
  );
};
