import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";
import "./Widgets.css";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon"/>
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widget__container">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1563864472963489792"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="AaqeebH"
          options={{ height: 300 }}
        />
        <div  className='widgets__tweet--button'>
        <TwitterShareButton
          url={"https://twitter.com/Aaqeebh"}
          options={{ text: "#reactjs is awesome" }}
        />
        </div>
      </div>
    </div>
  );
};

export default Widgets;
