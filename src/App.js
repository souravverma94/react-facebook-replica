import React, { useEffect, useState } from "react";
import renderIf from "render-if";
import "./App.css";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Feed from "./components/Feed";
import NavBar from "./components/NavBar";
import { firebaseApp } from "./firebase";

const App = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [hasAccount, setHasAccount] = useState(true); // For SignIN and SignUP page
  useEffect(() => {}, []);

  firebaseApp.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      console.log(user.uid);
      setisLoggedIn(true);
    } else {
      // No user is signed in.
      console.log("no-user ");
      setisLoggedIn(false);
    }
  });

  const toggleHasAccount = () => {
    setHasAccount((prevState) => !prevState);
  };
  return (
    <div className="App">
      <NavBar isLoggedin={isLoggedIn} />
      {renderIf(isLoggedIn)(<Feed />)}
      {renderIf(!isLoggedIn)(
        hasAccount ? (
          <SignIn toggleHasAccount={toggleHasAccount} />
        ) : (
          <SignUp toggleHasAccount={toggleHasAccount} />
        )
      )}
    </div>
  );
};

export default App;
