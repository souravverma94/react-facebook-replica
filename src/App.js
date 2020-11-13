import React, { useEffect, useState } from "react";
import renderIf from "render-if";
import "./App.css";
import SignInUsers from "./services/signIn";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Feed from "./components/Feed";
import NavBar from "./components/NavBar";
import { firebaseApp } from "./firebase";

const App = () => {
  const [userStatus, setUserStatus] = useState(false);
  useEffect(() => {}, []);

  const handleSignup = () => {
    const email = "abc@gmail.com";
    const password = "123456789";
    const res = CreateUser(email, password, "sourav", "verma");
    console.log(res);
  };

  const handleSignIn = () => {
    const email = "abc@gmail.com";
    const password = "123456789";
    const res = SignInUsers(email, password);
    console.log(res);
  };

  firebaseApp.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      console.log(user.uid);
      setUserStatus(true);
    } else {
      // No user is signed in.
      console.log("no-user ");
      setUserStatus(false);
    }
  });

  return (
    <div className="App">
      <NavBar userStatus={userStatus} />
      {renderIf(userStatus)(<Feed />)}
      {renderIf(!userStatus)(<SignUp />)}
      <button onClick={handleSignup}>Sign Up</button>
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default App;
