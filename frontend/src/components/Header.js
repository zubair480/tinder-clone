import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import "./header.css";
import { IconButton } from "@material-ui/core";
import ForumIcon from "@mui/icons-material/Forum";
import logoIcon from "../assets/Tinder_logo_PNG6.png";
function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
      <img src={logoIcon} alt="" className="header__logo" />
      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
