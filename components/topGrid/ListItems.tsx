import { Track, Artist } from "@spotify/web-api-ts-sdk";
import Image from "next/image";

export const TrackList = ({ topTracks }: { topTracks: Track[] }) => {
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

export const ArtistList = ({ topArtists }: { topArtists: Artist[] }) => {
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

export const GenreList = ({ topGenres }: { topGenres: string[] }) => {
  return (
    <div className="h-full">
      <ul className="flex flex-col h-full justify-between">
        {topGenres.slice(0, 5).map((genre, index) => {
          return (
            <li
              key={`genre-${genre}`}
              className={`flex gap-2 px-4 py-2 h-full items-center rounded-xl ${
                index % 2 === 0 ? "bg-zinc-900" : "bg-transparent"
              }`}
            >
              <p className="font-bold">
                {index + 1}
                {`. `}
              </p>
              {genre.at(0)?.toLocaleUpperCase() + genre.slice(1)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
