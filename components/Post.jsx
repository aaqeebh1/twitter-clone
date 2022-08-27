import { Avatar } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import React from "react";
import "./Post.css";

const Post = ({ displayName, username, verified, text, image, avatar }) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://pbs.twimg.com/profile_images/1456666356716351501/Byu6dXVg_400x400.jpg" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__header--text">
            <h3>
              Aaqeeb Hussain{" "}
              <span>
                <VerifiedIcon color="primary" fontSize="smaller" />
              </span>
              <span>
                @Aaqeebh
              </span>
            </h3>
          </div>
          <div className="post__text">
            <p>Im making a twitter clone</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
