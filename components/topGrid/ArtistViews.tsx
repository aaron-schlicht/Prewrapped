import { Artist } from "@spotify/web-api-ts-sdk";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

//Expanded Grid View of Top Artists
export const ArtistViewExpanded = ({
  topArtists,
}: {
  topArtists: Artist[];
}) => {
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

//Minimized List View of Top Artists
export const ArtistViewList = ({ topArtists }: { topArtists: Artist[] }) => {
  return (
    <div className="h-full overflow-y-scroll">
      <ul className="flex flex-col h-full justify-between">
        {topArtists.slice(0, 5).map((artist, index) => {
          return (
            <li
              key={`artist-${artist.id}`}
              className={`flex gap-2 px-4 py-2 rounded-xl h-full items-center ${
                index % 2 === 0 ? "bg-zinc-900" : "bg-transparent"
              }`}
            >
              <p className="font-bold">
                {index + 1}
                {`. `}
              </p>
              <Image
                src={artist.images[0].url}
                alt={`album-image-${artist.id}`}
                width={40}
                height={40}
                className="max-w-full aspect-square rounded-full object-cover"
              />
              <p className="overflow-hidden text-ellipsis line-clamp-1 ">
                {artist.name}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
