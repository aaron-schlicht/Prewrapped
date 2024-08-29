import { TrackViewExpanded, TrackViewList } from "./TrackViews";
import { ArtistViewExpanded, ArtistViewList } from "./ArtistViews";
import useGetTopTracks from "./useGetTopTracks";
import { TimeRange } from "../dashboard/Dashboard";
import useGetTopArtists from "./useGetTopArtists";

//Handles rendering of expanded and minimized top track views
export const TrackGrid = ({
  isExpanded,
  time,
}: {
  isExpanded: boolean;
  time: TimeRange;
}) => {
  const topTracks = useGetTopTracks(time);
  return isExpanded ? (
    <TrackViewExpanded topTracks={topTracks} />
  ) : (
    <TrackViewList topTracks={topTracks} />
  );
};

//Handles rendering of expanded and minimized top artist views
export const ArtistGrid = ({
  isExpanded,
  time,
}: {
  isExpanded: boolean;
  time: TimeRange;
}) => {
  const topArtists = useGetTopArtists(time);
  return isExpanded ? (
    <ArtistViewExpanded topArtists={topArtists} />
  ) : (
    <ArtistViewList topArtists={topArtists} />
  );
};
