import React, { useState } from "react";
import { TextInput } from "react-materialize";
import CreateUser from "../services/signUp";
import "./SignUp.css";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    const data = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password,
    };
    const res = CreateUser(data);
    console.log(res);
  };

  return (
    <div className="signup-container">
      <TextInput
        id="first"
        label="First Name"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <TextInput
        id="last"
        label="Last Name"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <TextInput
        id="email"
        label="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <TextInput
        id="password"
        label="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default SignUp;
