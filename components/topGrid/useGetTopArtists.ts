import { useEffect, useState } from "react";
import { TimeRange } from "../dashboard/Dashboard";
import { Artist } from "@spotify/web-api-ts-sdk";
import spotify from "@/lib/spotify-sdk/ClientInstance";

const useGetTopArtists = (time: TimeRange) => {
  const [topArtists, setTopArtists] = useState<Artist[]>([]);

  const getTopArtists = async () => {
    const artists = await spotify.currentUser.topItems("artists", time, 45);
    setTopArtists(artists.items);
  };

  useEffect(() => {
    getTopArtists();
  }, [spotify, time]);

  return topArtists;
};

export default useGetTopArtists;
