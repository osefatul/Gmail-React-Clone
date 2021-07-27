import React, { useEffect, useState } from "react";
import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import EmailRow from "./EmailRow";

import "./EmailList.css";
import Section from "./Section";
import { db } from "./firebase";

function EmailList() {
  const [emails, setEmails] = useState([]);

  // const tabs = [
  //   { id: 0, category: "Primay", data: emails, Icon: InboxIcon, color: "red" },
  //   {
  //     id: 1,
  //     category: "Social",

  //     Icon: PeopleIcon,
  //     color: "#1A73E8",
  //   },
  //   {
  //     id: 2,
  //     category: "Promotion",

  //     Icon: LocalOfferIcon,
  //     color: "green",
  //   },
  // ];
  // const [value, setValue] = useState(0);
  // const { id, category, data } = tabs[value];

  useEffect(() => {
    //snapshot is a realtime listener, if the database of emails is being modified or something has been added to it, then get that and run it again and then put it back on setEmails variable. docs are the each record of submitting email form [to,subjec,messafe]

    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="emailList">
      <div className="emailList_settings">
        <div className="emailList_settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>

        <div className="emailList_settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>

      <div className="emailList_sections">
        {/* {tabs.map((item, index) => {
          return (
            <div
              key={item.id}
              onClick={() => setValue(index)}
              className={`section ${index === value && "section-selected"}`}
              style={{
                borderBottom: `3px solid ${item.color}`,
                color: `${item.color}`,
              }}
            >
              <item.Icon />
              <h4>{item.category}</h4>
            </div>
          );
        })} */}

        <Section emails={emails} />

        {/*
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />

     
        {active.objects.map((element, index) => {
          return (
            <Section
              key={element}
              Icon={element.icon}
              title={element.title}
              color={element.color}
              onClick={() => toggleActive(index)}
              className={toggleActiveStyles(index)}
            />
          );
        })}

       */}
      </div>

      {/* <div className="emailList_list">
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
      </div> */}
    </div>
  );
}

export default EmailList;
