import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import HomeImage from "../components/HomeImage";

const Authorization = () => {
  const [authType, setAuthType] = useState("login");

  return (
    <div className="flex w-full">
      <HomeImage />
      {authType === "login" && <Login setAuthType={setAuthType} />}
      {authType === "register" && <Register setAuthType={setAuthType}/>}
    </div>
  );
};

export default Authorization;
