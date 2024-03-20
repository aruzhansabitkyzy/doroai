import React, { useState } from "react";
import { useForm } from "react-hook-form";
import hide from "../images/Union.png";
import show from "../images/Visible.png";
import ErrorPopup from "./ErrorPopup";

const LoginForm = ({register, handleSubmit, onSubmit}) => {
  const [isFloatingUsername, setIsFloatingUsername] = useState(false);
  const [isFloatingPassword, setIsFloatingPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleFocus = (fieldName) => {
    if (fieldName === "username") {
      setIsFloatingUsername(true);
    } else if (fieldName === "password") {
      setIsFloatingPassword(true);
    }
  };

  const handleBlur = (fieldName, event) => {
    if (!event.target.value) {
      if (fieldName === "username") {
        setIsFloatingUsername(false);
      } else if (fieldName === "password") {
        setIsFloatingPassword(false);
      }
    }
  };

  return (
    <>
      {error && <ErrorPopup error={error} />}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-1/2 relative"
      >
        <div className="relative">
          <input
            type="text"
            {...register("username")}
            placeholder={!isFloatingUsername ? "Имя пользователя" : ""}
            className={`font-nunito block w-full px-2 py-3 mt-5 mb-5 shadow-sm border-b bg-white focus:outline-none ${
              error
                ? "text-red-500 border-red-500"
                : "text-gray-800  border-neutral-300"
            }`}
            onFocus={() => handleFocus("username")}
            onBlur={(event) => handleBlur("username", event)}
          />
          {isFloatingUsername && (
            <label
              className={`absolute left-2 transition-all font-medium text-neutral-500 ${
                isFloatingUsername ? "top-0" : "top-2"
              }`}
            >
              Имя пользователя
            </label>
          )}
        </div>
        <div className="relative">
          <input
            className={`font-nunito block w-full px-2 py-3 mt-5 mb-5 shadow-sm border-b bg-white focus:outline-none ${
              error
                ? "text-red-500 border-red-500"
                : "text-gray-800  border-neutral-300"
            }`}
            type={showPassword ? "text" : "password"}
            placeholder={!isFloatingPassword ? "Пароль" : ""}
            {...register("password")}
            onFocus={() => handleFocus("password")}
            onBlur={(event) => handleBlur("password", event)}
          />
          {isFloatingPassword && (
            <label
              className={`absolute left-2 transition-all font-medium text-neutral-500 ${
                isFloatingPassword ? "top-0 text-neutral-300" : "top-2"
              }`}
            >
              Пароль
            </label>
          )}

          <img
            src={showPassword ? show : hide}
            height={24}
            width={24}
            className="absolute bottom-3 cursor-pointer mb-5"
            style={{ left: "95%" }}
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>
        <input
          type="submit"
          className={`px-5 py-3 mt-10 rounded-3xl text-white font-medium ${
            error ? "bg-grey" : "bg-maine cursor-pointer"
          }`}
          value="Войти"
        />
      </form>
    </>
  );
};

export default LoginForm;
