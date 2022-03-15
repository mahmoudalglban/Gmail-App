import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import {Router, Route, Routes } from "react-router-dom";
import Mail from "./Mail";
import EmailLest from "./EmailLest";
import SendMail from "./SendMail";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login({
          displayName:user?.displayName,
          email:user?.email,
          photoUrl:user?.photoURL,
        }))
       
  
    }});
  }, [])


  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
        <Routes>
            <Route path="/mail" element={<Mail />} />
            <Route path="/" element={<EmailLest />} />
        </Routes>
          </div>
          {sendMessageIsOpen && <SendMail />}
          </>
      )}
    </div>
  );
}

export default App;
