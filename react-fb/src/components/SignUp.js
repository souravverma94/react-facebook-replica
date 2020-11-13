import React from "react";
import { TextInput } from "react-materialize";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="signup-container">
      <TextInput id="first" label="First Name" />
      <TextInput id="last" label="Last Name" />
      <TextInput id="email" label="Email" />
      <TextInput id="password" label="Password" />
    </div>
  );
};

export default SignUp;
