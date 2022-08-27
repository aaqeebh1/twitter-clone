import { Avatar, Button, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import AlignHorizontalLeftOutlinedIcon from "@mui/icons-material/AlignHorizontalLeftOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import PublicIcon from "@mui/icons-material/Public";
import React from "react";
import "./TweetBox.css";

const TweetBox = () => {
  return (
    <div className="tweet__box">
      <div className="tweet__box--avatar">
        <Avatar src="https://pbs.twimg.com/profile_images/1456666356716351501/Byu6dXVg_400x400.jpg" />
      </div>
      <form>
        <Button variant="outlined" className="audiance__selection--btn">
          Everyone <KeyboardArrowDownIcon fontSize="small" />{" "}
        </Button>
        <div className="tweet__box--input">
          <input placeholder="What's happening?" type="text" />
        </div>
        <Button className="tweet__box--ecr-btn">
          {" "}
          <PublicIcon fontSize="small" /> Everyone can reply
        </Button>
        <div className="tweet__buttons--wrapper">
          <div className="button__wrapper--left">
            <IconButton className="iconButton">
              <ImageOutlinedIcon
                fontSize="small"
                className="tweet__button--icon"
              />
            </IconButton>
            <IconButton className="iconButton">
              <GifBoxOutlinedIcon
                fontSize="small"
                className="tweet__button--icon"
              />
            </IconButton>
            <IconButton className="iconButton">
              <AlignHorizontalLeftOutlinedIcon
                fontSize="small"
                className="tweet__button--icon"
              />
            </IconButton>
            <IconButton className="iconButton">
              <SentimentSatisfiedAltOutlinedIcon
                fontSize="small"
                className="tweet__button--icon"
              />
            </IconButton>
            <IconButton className="iconButton">
              <DateRangeOutlinedIcon
                fontSize="small"
                className="tweet__button--icon"
              />
            </IconButton>
            <IconButton className="iconButton">
              <FmdGoodOutlinedIcon
                fontSize="small"
                className="tweet__button--icon-location"
              />
            </IconButton>
          </div>
          <div className="button__wrapper--right">
            <Button variant="contained" className="tweet__button">
              Tweet
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
