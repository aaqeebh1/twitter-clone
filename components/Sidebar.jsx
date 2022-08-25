import React from "react";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions";
import TwitterIcon from "@mui/icons-material/Twitter";
import { IconButton } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarOptions Icon={TwitterIcon} fontsize={'large'}/>
    </div>
  );
};

export default Sidebar;
