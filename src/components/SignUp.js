import React, { useState } from "react";
import { Button, TextInput } from "react-materialize";
import CreateUser from "../services/signUp";
import "./SignUp.css";

const SignUp = ({ toggleHasAccount }) => {
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
      <h4>Sign Up</h4>
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
      <Button
        node="button"
        type="submit"
        onClick={onSubmit}
        style={{ backgroundColor: "#1877f2" }}
      >
        Submit
      </Button>
      <p>
        Already Have an Account?{" "}
        <span onClick={() => toggleHasAccount()}>Sign In</span>
      </p>
    </div>
  );
};

export default SignUp;
