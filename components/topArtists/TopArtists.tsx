"use client";

import { Artist, Page } from "@spotify/web-api-ts-sdk";
import { useEffect, useState } from "react";
import spotify from "@/lib/spotify-sdk/ClientInstance";
import Image from "next/image";

const TopArtists = () => {
  const [artists, setArtists] = useState<Page<Artist>>();

  useEffect(() => {
    const getTopArtists = async () => {
      const topArts = await spotify.currentUser.topItems("artists");
      setArtists(topArts);
    };
    getTopArtists();
  }, [spotify]);
  return (
    <div>
      <div className="flex gap-10 justify-center flex-wrap">
        {artists?.items.map((artist) => {
          return (
            <div
              key={`artist-${artist.id}`}
              className="flex flex-col align-middle justify-center gap-5"
            >
              <Image
                src={artist.images[0].url}
                alt={`artist-${artist.id}-img`}
                width={200}
                height={200}
                placeholder="blur"
                style={{
                  width: 200,
                  height: 200,
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
                blurDataURL={getBlurDataUrl()}
              />
              <h2 className="font-bold text-center text-xl">{artist.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopArtists;

function shimmer(w: number, h: number) {
  return `
     <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
       <defs>
         <linearGradient id="g">
           <stop stop-color="#333" offset="20%" />
           <stop stop-color="#222" offset="50%" />
           <stop stop-color="#333" offset="70%" />
         </linearGradient>
       </defs>
       <rect width="${w}" height="${h}" fill="#333" />
       <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
       <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
     </svg>`;
}

function toBase64(str: string) {
  return typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);
}

export function getBlurDataUrl() {
  return `data:image/svg+xml;base64,${toBase64(shimmer(300, 300))}`;
}
