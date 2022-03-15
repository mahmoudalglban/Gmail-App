import React from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import {
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";

function SendMail() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const calRef = collection(db, "emails");
    

    addDoc(calRef, {
      to: data.to,
      subject: data.subject,
      message: data.message,
      timestamp: serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <IconButton onClick={() => dispatch(closeSendMessage())}>
          <CloseIcon className="sendMail__close" />
        </IconButton>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("to", { required: true })}
          placeholder="To"
          type="email"
        />
        {errors.to && <p className="sendMail__errors">to is required</p>}
        <input
          {...register("subject", { required: true })}
          placeholder="subject"
          type="text"
        />
        {errors.subject && (
          <p className="sendMail__errors">subject is required</p>
        )}
        <input
          {...register("message", { required: true })}
          placeholder="Message"
          type="text"
          className="sendMail__message"
        />
        {errors.message && (
          <p className="sendMail__errors">message is required</p>
        )}
        <div className="sendMail__options">
          <Button type="submit" className="sendMail__send">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
