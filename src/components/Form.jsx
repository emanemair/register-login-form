import React from "react";
import Button from "./Button";
import Input from "./Input";
import {userIsRegistered} from "./App"; 



function Form() {
  return (
    <form className="form">
      <Input type="text" placeholder="user name" /> 
      <Input type="password" placeholder="password" /> 
      {userIsRegistered ? null : <Input type="password" placeholder="Confirm Password" />}
      <Button type="submit" text={userIsRegistered ? "Log In" : "Register"} / > 
    </form>
  );
}

export default  Form; 