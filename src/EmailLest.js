import React, { useEffect, useState } from "react";
import "./EmailLest.css";
import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import Sections from "./Sections";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import EmailRow from "./EmailRow";
import { collection, onSnapshot, orderBy, query, Timestamp } from "firebase/firestore";
import { db } from "./firebase";

function EmailLest() {
  const [email, setEmail] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "emails"), orderBy("timestamp", "desc"));
    onSnapshot(q, (snapshot) => {
      setEmail(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="emailLest">
      <div className="emailLest__setting">
        <div className="emailLest__settingLeft">
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
        <div className="emailLest__settingRight">
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
      <div className="emailLest__sections">
        <Sections
          Icon={InboxIcon}
          title="Primary"
          color="red"
          selected={true}
        />
        <Sections Icon={PeopleIcon} title="Social" color="#1A73EB" />
        <Sections Icon={LocalOfferIcon} title="Promotions" color="green" />
      </div>
      <div className="emailLest__lest">
       
        {email.map(({id, data:{to,subject, message, timestamp }}) =>(

          <EmailRow
          id={id}
          key={id}
          title={to}
          time={(new Date(timestamp?.seconds *1000).toLocaleString())}
          description={message}
          subject={subject}
        />
        ))}
       
     
      
      </div>
    </div>
  );
}

export default EmailLest;
