import React from "react";
import "./Sidebar.css";
import { Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";

function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        onClick={() => dispatch(openSendMessage())}
        startIcon={<AddIcon />}
        className="sidebar__compose"
      >
        COMPOSE
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number="45"
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title="Starred" number="15" />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number="12" />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number="65" />
      <SidebarOption Icon={NearMeIcon} title="Send" number="48" />
      <SidebarOption Icon={NoteIcon} title="Drafts" number="61" />
      <SidebarOption Icon={ExpandMoreIcon} title="More" number="81" />
      <div className="sidebar__footer">
        <div className="sidebar__footerIcon">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
