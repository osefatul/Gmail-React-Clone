import { Button } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import AddIconGoogle from "./compose.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <Button className="sidebar_compose" src={AddIconGoogle}>
        Compose
      </Button>
    </div>
  );
}

export default Sidebar;
