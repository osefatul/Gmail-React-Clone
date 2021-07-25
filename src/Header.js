import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import TuneIcon from "@material-ui/icons/Tune";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signout = () => {
    auth.signOut().then(() => {
      //actually signout from firebase
      dispatch(logout());
    });
  };
  return (
    <div className="header">
      <div className="header_left">
        {/*MenuIcon is just an icon. we have to wrapped it in button */}
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://www.gizmochina.com/wp-content/uploads/2020/10/Screenshot-145.png"
          alt=""
        />
      </div>
      <div className="header_middle">
        <SearchIcon />
        <input type="text" placeholder="Search mail" />
        <TuneIcon className="header_inputCaret" />
      </div>
      <div className="header_right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar onClick={signout} src={user?.photoUrl} />
      </div>
    </div>
  );
}

export default Header;
