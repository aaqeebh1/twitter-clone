import React, { useEffect, useState } from "react";
import "./Feed.css";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import { IconButton } from "@mui/material";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "../firebase.js";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2 className="feed__title">Home</h2>
        <IconButton>
          <AutoAwesomeOutlinedIcon />
        </IconButton>
      </div>
      <TweetBox />
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            text={post.text}
            verified={post.verified}
            image={post.image}
            avatar={post.avatar}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
