import React from "react";
import { TextInput } from "react-materialize";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="signin-container">
      <TextInput id="email" label="Email" />
      <TextInput id="password" label="Password" />
    </div>
  );
};

export default SignIn;
