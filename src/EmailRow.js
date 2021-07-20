import { Checkbox, IconButton } from "@material-ui/core";
import { LabelImportantOutlined, StarBorderOutlined } from "@material-ui/icons";
import React from "react";
import "./EmailRow.css";

function EmailRow({ title, subject, description, id, time }) {
  return (
    <div className="emailRow">
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
        <h4>{subject}</h4>
      </div>
      <div className="emailRow-description"></div>
    </div>
  );
}

export default EmailRow;
