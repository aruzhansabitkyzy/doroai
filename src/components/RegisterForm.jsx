import { useState, React } from "react";
import ErrorPopup from "./ErrorPopup";
const RegisterForm = ({
  step,
  setStep,
  username,
  setUsername,
  email,
  setEmail,
}) => {
  const [isFloatingUsername, setIsFloatingUsername] = useState(false);
  const [isFloatingEmail, setIsFloatingEmail] = useState(false);
  const [error, setError] = useState("");
  const handleFocus = (fieldName) => {
    if (fieldName === "username") {
      setIsFloatingUsername(true);
    } else if (fieldName === "email") {
      setIsFloatingEmail(true);
    }
  };

  const handleBlur = (fieldName, event) => {
    if (!event.target.value) {
      if (fieldName === "username") {
        setIsFloatingUsername(false);
      } else if (fieldName === "email") {
        setIsFloatingEmail(false);
      }
    }
  };
  return (
    <>
      {error && <ErrorPopup error={error} />}
      <div className="flex flex-col w-1/2 relative">
        <div className="relative">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
              className={` font-nunito absolute left-2 transition-all font-medium text-neutral-500 ${
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type={"email"}
            placeholder={!isFloatingEmail ? "Почта" : ""}
            onFocus={() => handleFocus("email")}
            onBlur={(event) => handleBlur("email", event)}
          />
          {isFloatingEmail && (
            <label
              className={` font-nunito absolute left-2 transition-all font-medium text-neutral-500 ${
                isFloatingEmail ? "top-0 text-neutral-300" : "top-2"
              }`}
            >
              Почта
            </label>
          )}
        </div>
        <input
          type="submit"
          className={` font-nunito px-5 py-3 mt-10 rounded-3xl text-white font-medium ${
            error || username.length <= 0 || email.length <= 0
              ? "bg-grey"
              : "bg-maine cursor-pointer"
          }`}
          value="Далее"
          onClick={() => setStep((prevStep) => prevStep + 1)}
        />
      </div>
    </>
  );
};
export default RegisterForm;
