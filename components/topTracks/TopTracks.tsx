"use client";

import { Track, Page } from "@spotify/web-api-ts-sdk";
import { useEffect, useState } from "react";
import spotify from "@/lib/spotify-sdk/ClientInstance";
import Image from "next/image";

const TopTracks = () => {
  const [tracks, setTracks] = useState<Page<Track>>();

  useEffect(() => {
    const getTopTracks = async () => {
      const topTracks = await spotify.currentUser.topItems("tracks");
      setTracks(topTracks);
    };
    getTopTracks();
  }, [spotify]);
  return (
    <div className="flex gap-10 justify-center flex-wrap">
      {tracks?.items.map((track) => {
        return (
          <div
            key={`track-${track.id}`}
            className="flex flex-col items-center gap-2"
          >
            <Image
              src={track.album.images[0].url}
              width={100}
              height={100}
              style={{ objectFit: "cover", width: 100, height: 100 }}
              alt="Track Image"
            />
            <h1 className="text-wrap text-center w-32">{track.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default TopTracks;
