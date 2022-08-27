import React from "react";
import "./Feed.css";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import { IconButton } from "@mui/material";
import TweetBox from "./TweetBox";
import Post from "./Post";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2 className="feed__title">Home</h2>
        <IconButton>
          <AutoAwesomeOutlinedIcon />
        </IconButton>
      </div>
      <TweetBox />
      <Post />
    </div>
  );
};

export default Feed;
