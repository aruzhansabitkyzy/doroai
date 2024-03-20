import React, { useState } from "react";
import RegisterForm from "./RegisterForm";
import NewPassword from "./NewPassword";
import { register } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
const RegisterLayout = ({ setAuthType }) => {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submit, setSubmit] = useState(false);
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  function onSubmit() {
    const newUser = {
      username: username,
      email: email,
      password: password,
      name: "",
      surname: "",
      phoneNumber: null,
      birthday: null,
      favorites: [],
    };
    dispatch(register(newUser));
    setAuthType("login");
  }
  return (
    <div className="flex flex-col items-center justify-center m-auto h-screen">
      {step === 1 && (
        <RegisterForm
          step={step}
          setStep={setStep}
          username={username}
          email={email}
          setUsername={setUsername}
          setEmail={setEmail}
        />
      )}

      {step === 2 && (
        <NewPassword
          error={error}
          setError={setError}
          password={password}
          setPassword={setPassword}
          onSubmit={onSubmit}
        />
      )}
    </div>
  );
};

export default RegisterLayout;
