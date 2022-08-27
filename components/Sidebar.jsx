import React from "react";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import TagIcon from "@mui/icons-material/Tag";
import { Button, IconButton } from "@mui/material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <IconButton>
        <TwitterIcon fontSize="large" className="twitterIcon" />
      </IconButton>
      <SidebarOptions
        Icon={HomeOutlinedIcon}
        fontsize={"large"}
        text="Home"
        active
      />
      <SidebarOptions Icon={TagIcon} fontsize={"large"} text="Explore" />
      <SidebarOptions
        Icon={NotificationsNoneIcon}
        fontsize={"large"}
        text="Notifications"
      />
      <SidebarOptions
        Icon={EmailOutlinedIcon}
        fontsize={"large"}
        text="Messages"
      />
      <SidebarOptions
        Icon={BookmarkBorderOutlinedIcon}
        fontsize={"large"}
        text="Bookmarks"
      />
      <SidebarOptions
        Icon={ArticleOutlinedIcon}
        fontsize={"large"}
        text="Lists"
      />
      <SidebarOptions
        Icon={PersonOutlineOutlinedIcon}
        fontsize={"large"}
        text="Profile"
      />
      <SidebarOptions
        Icon={PendingOutlinedIcon}
        fontsize={"large"}
        text="More"
      />
      <Button variant="outlined" className="sidebar__tweet--btn" fullWidth>
        Tweet
      </Button>
    </div>
  );
};

export default Sidebar;
