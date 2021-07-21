import { Checkbox, IconButton } from "@material-ui/core";
import { LabelImportantOutlined, StarBorderOutlined } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router-dom";
import "./EmailRow.css";

function EmailRow({ title, subject, description, id, time }) {
  //for clicking on the email...
  const history = useHistory();
  return (
    <div onClick={() => history.push("/mail")} className="emailRow">
      <div className="emailRow-options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <h3 className="emailRow-title">{title}</h3>
      <div className="emailRow-message">
        <h4>
          {subject}{" "}
          <span className="emailRow-description">- {description}</span>
        </h4>
      </div>
      <p className="emailRow-time">{time}</p>
    </div>
  );
}

export default EmailRow;
