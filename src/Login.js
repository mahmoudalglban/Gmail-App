import React from "react";
import "./Login.css";
import {auth ,provider} from "./firebase"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

function Login() {
    const dispatch = useDispatch()
  const lonin = () => {
    signInWithPopup(auth, provider)
    .then((user) => {
        dispatch(login({
            displayName:user.user.displayName,
            email:user.user.email,
            photoUrl:user.user.photoURL,
        })
        )
     
        console.log(user)
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://alwafd.news/images/thumbs/828/news/d3d03c1255465244098dc4ab6b17266e.jpg"
          alt=""
        />
        <button variant="contained" color="primary" onClick={lonin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
