import React, { useEffect } from "react";
import "./Mail.css";
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useNavigate } from "react-router-dom";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import PrintIcon from "@material-ui/icons/Print";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {useDispatch, useSelector} from "react-redux"
import {selectMailNow, selectSendMail} from "./features/mailSlice"
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";


function Mail() {
  const navigate = useNavigate();
  const selsctMail = useSelector(selectSendMail)
  
   const dispatch = useDispatch()
  

  
  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton
            onClick={() => {
              navigate("/");
            }}
          >
            <ArrowBackIcon />
          </IconButton>

          <IconButton>
            <MoveToInboxIcon />
          </IconButton>

          <IconButton>
            <ErrorIcon />
          </IconButton>

          <IconButton>
            <DeleteIcon />
          </IconButton>

          <IconButton>
            <EmailIcon />
          </IconButton>

          <IconButton>
            <WatchLaterIcon />
          </IconButton>

          <IconButton>
            <CheckCircleIcon />
          </IconButton>

          <IconButton>
            <LabelImportantIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="mail__toolsRight">
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>

          <IconButton>
            <PrintIcon />
          </IconButton>

          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
      
      <div className="mail__body">
        <div className="mail__bodyHeader">
          <h2>{selsctMail?.subject}</h2>
          <LabelImportantIcon className="mail__important" />
          <p>{selsctMail?.title}</p>
          <p className="mail__time">{selsctMail?.time}</p>
        </div>
        <div className="mail__message">
          <p>{selsctMail?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
