import { BorderBottom } from "@material-ui/icons";
import React, { useState } from "react";
import "./Section.css";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

function Section({ title, color, Icon, cssClass, selected, emails }) {
  const tabs = [
    { id: 0, category: "Primay", data: emails },
    { id: 1, category: "Social", data: " " },
    { id: 2, category: "Promotion", data: " " },
  ];
  const [value, setValue] = useState(0);

  const { id, category, data } = tabs[value];

  return (
    <div>
      <div
        className={`section ${selected && "section-selected"}`}
        style={{
          borderBottom: `3px solid ${color}`,
          color: `${selected && color}`,
        }}
      >
        <Icon />
        <h4>{title}</h4>
      </div>
    </div>
  );

  // return (
  //   <div
  //     className={`section ${cssClass}`}
  //     style={{
  //       borderBottom: `3px solid ${color}`,
  //       color: `${cssClass && color}`,
  //     }}
  //   >
  //     <Icon />
  //     <h4>{title}</h4>
  //   </div>
  // );
}

export default Section;
