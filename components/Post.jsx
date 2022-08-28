import { Avatar } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import React, {forwardRef} from "react";
import "./Post.css";

const Post = forwardRef(({ displayName, username, verified, text, image, avatar }, ref) => {

  return (
    <div className="post" ref={ref}>
      <div className="post__avatar">
        <Avatar src={avatar}/>
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__header--text">
            <h3 className="post__display-name">
              {displayName}{" "}
              {verified && <VerifiedIcon color="primary" fontSize="smaller" />}
              <span className="post__username"> {username}</span>
            </h3>
          </div>
          <div className="post__text">
            <p>{text}</p>
          </div>
        </div>
        <div className="post__img">
          <img
            src={image}
            alt=""
          />
        </div>
        <div className="post__options">
          <ChatBubbleOutlineRoundedIcon fontSize="small" />
          <RepeatOutlinedIcon fontSize="small" />
          <FavoriteBorderOutlinedIcon fontSize="small" />
          <FileUploadOutlinedIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
});

export default Post;
