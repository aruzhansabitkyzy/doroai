import lock from "../images/lock.png";
import { useState, useEffect, useRef } from "react";
import Button from "./ui/Button";
const NewPassword = ({ error, setError, password, setPassword, onSubmit }) => {
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const input1 = useRef();
  const input2 = useRef();

  useEffect(() => {
    input1.current.focus();
  }, []);

  function checkPasswords() {
    if (input1.current.value != input2.current.value) {
      setError("Пароли не совпадают");
    } else {
      onSubmit();
    }
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-20 h-20 rounded-xl bg-maine">
        <img src={lock} className="m-auto pt-4 shadow-xl shadow-maine" />
      </div>
      <div className="text-center">
        <p className="font-semibold text-lg mt-10 mb-3 font-nunito text-newblack">
          {isPasswordGenerated ? "Повторите" : "Придумайте"} пароль
        </p>
        <p className="text-grey font-semibold font-nunito">
          Минимальная длина — 8 символов.
        </p>
        <p className="text-grey font-semibold font-nunito">
          Для надежности пароль должен <br />
          содержать буквы и цифры.
        </p>
      </div>
      <div className="pl-56">
        <input
          className={`font-nunito block text-4xl tracking-widest w-full mt-5 mb-5 borderb-b bg-white border-none outline-none ${
            error ? "text-coral" : "text-black"
          }`}
          type={"password"}
          ref={input1}
          value={password}
          onChange={(e) => {
            setError("");
            setPassword(e.target.value);
          }}
        />
        <input
          className={`font-nunito block text-4xl tracking-widest w-full mt-5 mb-5 borderb-b bg-white border-none outline-none ${
            error ? "text-coral" : "text-black"
          } ${isPasswordGenerated ? "block" : "none"}`}
          type={"password"}
          autofocus={true}
          ref={input2}
          value={confirmPassword}
          onChange={(e) => {
            setError("");
            setConfirmPassword(e.target.value);
          }}
        />
        {error && <p className="text-center text-coral">{error}</p>}
        {!isPasswordGenerated ? (
          <Button
            text={"Далее"}
            disable={password.length < 8}
            onClick={() => {
              setIsPasswordGenerated(true);
              input2.current.focus();
            }}
            style={"w-1/2 mt-10"}
          />
        ) : (
          <input
            type="submit"
            className={`w-1/2 px-5 py-2 mt-10 rounded-3xl text-white font-medium ${
              error ? "bg-grey" : "bg-maine cursor-pointer"
            }`}
            value="Далее"
            onClick={checkPasswords}
          />
        )}
      </div>
    </div>
  );
};

export default NewPassword;
