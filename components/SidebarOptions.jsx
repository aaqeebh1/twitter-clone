import { IconButton } from "@mui/material";
import React from "react";
import "./SidebarOptions.css";

const SidebarOptions = ({ text, Icon, fontsize, active }) => {
  return (
    <div className={`sidebar__option ${active && "sidebar__option--active"} `}>
      <div className="sidebar__option--inner">
        <Icon fontSize={fontsize} />
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default SidebarOptions;
