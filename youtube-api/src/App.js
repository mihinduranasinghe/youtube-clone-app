import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { SearchBar, VideoDetails, VideoList } from "./components";
// import SearchBar from "./components/SearchBar";
// import VideoDetails from "./components/VideoDetails";
import youtube from "./api/youtube";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.handleSubmit("");
  }

  onSelectVideo = (video) => {
    this.setState({ selectedVideo: video });
  };

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyAcGHZzgapxKwtWw0kXWv7FUyp37lG-Jrk",
        q: searchTerm,
      },
    });
    console.log(response.data.items);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };
  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              {/*Video Detail*/}
              <VideoDetails video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              {/*Video list*/}
              <VideoList videos={videos} onSelectVideo={this.onSelectVideo} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
