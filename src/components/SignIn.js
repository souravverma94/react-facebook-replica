import React, { useState } from "react";
import { Button, TextInput } from "react-materialize";
import { SignInUsers } from "../services/signIn";
import "./SignIn.css";

const SignIn = ({ toggleHasAccount }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    const data = {
      email: email,
      password: password,
    };
    const res = SignInUsers(data);
    console.log(res);
  };
  return (
    <div className="signin-container">
      <h4>Sign In</h4>
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
        onClick={handleSignIn}
        style={{ backgroundColor: "#1877f2" }}
      >
        Sign In
      </Button>
      <p>
        Don't have an account?{" "}
        <span onClick={() => toggleHasAccount()}>Sign Up</span>
      </p>
    </div>
  );
};

export default SignIn;
