import { Artist, Page, Track } from "@spotify/web-api-ts-sdk";
import { useEffect, useState } from "react";
import spotify from "@/lib/spotify-sdk/ClientInstance";
import { TimeRange } from "../dashboard/Dashboard";

const useGetTopItems = (time: TimeRange) => {
  const [topArtists, setTopArtists] = useState<Artist[]>([]);
  const [topTracks, setTopTracks] = useState<Track[]>([]);
  const [topGenres, setTopGenres] = useState<string[]>([]);

  const getTopArtists = async () => {
    const artists = await spotify.currentUser.topItems("artists", time, 45);
    setTopArtists(artists.items);
  };

  const getTopTracks = async () => {
    const tracks = await spotify.currentUser.topItems("tracks", time, 45);
    setTopTracks(tracks.items);
  };

  const getTopGenres = () => {
    if (Boolean(topTracks.length) && Boolean(topArtists.length)) {
      const genres = new Map<string, number>();
      topTracks.forEach((track) => {
        const tGenres = track.album.genres;
        if (Boolean(tGenres) && Boolean(tGenres.length)) {
          tGenres.forEach((g) => {
            let i = genres.get(g) || 0;
            genres.set(g, i + 1);
          });
        }
      });
      topArtists.forEach((artist) => {
        const aGenres = artist.genres;
        aGenres.forEach((g) => {
          let i = genres.get(g) || 0;
          genres.set(g, i + 1);
        });
      });
      setTopGenres(
        [...genres.entries()].sort((a, b) => b[1] - a[1]).map((val) => val[0])
      );
    }
  };

  useEffect(() => {
    getTopArtists();
    getTopTracks();
  }, [spotify, time]);

  useEffect(() => {
    getTopGenres();
  }, [topArtists, topTracks]);

  return {
    topTracks,
    topArtists,
    topGenres,
  };
};

export default useGetTopItems;
