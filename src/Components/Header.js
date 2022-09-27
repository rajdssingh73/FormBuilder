import React from "react";
import "./Header.css";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
import Sidebar from "./Sidebar";
import { Outlet, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="header">
        <div className="header_info">
          <Sidebar />
          <span className="title" onClick={() => navigate("/")}>
            <b style={{cursor:"pointer"}}>FlokX FormBuilder</b>
          </span>
        </div>
        <div className="header_search">
          <SearchIcon />
          <input
            type="text"
            name="search"
            placeholder="Search Your Form Here"
            style={{ fontFamily: "Sans" }}
          />
        </div>
        <div className="header_right">
          <IconButton>
            <AppsIcon />
          </IconButton>
          <IconButton>
            <Avatar src="" />
          </IconButton>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
