import { useEffect, useState } from "react";
import { TimeRange } from "../dashboard/Dashboard";
import { Track } from "@spotify/web-api-ts-sdk";
import spotify from "@/lib/spotify-sdk/ClientInstance";

const useGetTopTracks = (time: TimeRange) => {
  const [topTracks, setTopTracks] = useState<Track[]>([]);

  const getTopTracks = async () => {
    const tracks = await spotify.currentUser.topItems("tracks", time, 45);
    setTopTracks(tracks.items);
  };

  useEffect(() => {
    getTopTracks();
  }, [spotify, time]);

  return topTracks;
};

export default useGetTopTracks;
