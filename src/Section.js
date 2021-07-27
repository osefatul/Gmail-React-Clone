import { BorderBottom } from "@material-ui/icons";
import React, { useState } from "react";
import "./Section.css";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import EmailRow from "./EmailRow";

function Section({ emails }) {
  const tabs = [
    { id: 0, category: "Primay", data: emails, Icon: InboxIcon, color: "red" },
    {
      id: 1,
      category: "Social",
      Icon: PeopleIcon,
      color: "#1A73E8",
    },
    {
      id: 2,
      category: "Promotion",
      Icon: LocalOfferIcon,
      color: "green",
    },
  ];
  const [value, setValue] = useState(0);
  const { id, category, data } = tabs[value];

  return (
    <div>
      <div className="tabs_section">
        {tabs.map((item, index) => {
          return (
            <div
              key={item.id}
              onClick={() => setValue(index)}
              className={` section ${index === value && "section-selected"}`}
              style={{
                borderBottom: `3px solid ${item.color}`,
                color: `${item.color}`,
              }}
            >
              <item.Icon />
              <h4>{item.category}</h4>
            </div>
          );
        })}{" "}
      </div>

      <div className="emailList_list">
        {data &&
          data.map(({ id, data: { to, subject, message, timestamp } }) => {
            return (
              <EmailRow
                id={id}
                key={id}
                title={to}
                subject={subject}
                description={message}
                time={new Date(timestamp?.seconds * 1000).toUTCString()}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Section;
