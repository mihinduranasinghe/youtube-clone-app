import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
const VideoItem = ({ video, onSelectVideo }) => {
  return (
    <Grid item xs={12}>
      <paper
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => onSelectVideo(video)}
      >
        <img
          src={{ marginRight: "20px" }}
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
        ></img>
        <Typography varient="subtitle1">
          <b>{video.snippet.title}</b>
        </Typography>
      </paper>
    </Grid>
  );
};

export default VideoItem;
