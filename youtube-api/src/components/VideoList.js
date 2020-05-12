import React from "react";
import { Grid } from "@material-ui/core";
import VideoItem from "./VideoItem";
const VideoList = ({ videos, onSelectVideo }) => {
  const ListOfVideos = videos.map((video, id) => (
    <VideoItem key={id} onSelectVideo={onSelectVideo} video={video} />
  ));
  return (
    <Grid container spacing={10}>
      {ListOfVideos}
    </Grid>
  );
};

export default VideoList;
