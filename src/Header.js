import React from "react";
import "./Header.css";
import { Button ,Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import {  logout, selectUser } from "./features/userSlice";





function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()


  const logoute = () =>{
    signOut(auth).then(() => {
      dispatch(logout());
     
    
    }).catch((error) => {
      
      // alert("An error happened..")
    });
  }


  return (
    <div className="header">
      <div className="header__left">
        <Button>
          <MenuIcon />
        </Button>
        <img
          src="data:image/png;base64,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"
          alt=""
        />
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDownIcon />
      </div>
      <div className="header__right">
        <Button>
          <AppsIcon />
        </Button>
        <Button>
          <NotificationsIcon />
        </Button>
        <Avatar src={user.photoUrl} onClick={logoute} />
      </div>
    </div>
  );
}

export default Header;
