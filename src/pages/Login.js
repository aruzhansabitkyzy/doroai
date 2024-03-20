import React from "react";
import LoginForm from "../components/LoginForm";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.user.users);

  function onSubmit(data) {
    const payload = users.find(
      (user) =>
        user.username === data.username.trim() && user.password === data.password.trim()
    );
    if (payload) {
      dispatch(login(payload));
      // localStorage.setItem('loggedIn', JSON.stringify(payload));
      navigate("/");
    }
  }
  return (
    <div className="flex flex-col items-center justify-center w-1/2 mt-36">
      <LoginForm
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
      <p
        className="mt-20 text-maine font-medium cursor-pointer"
        onClick={() => props.setAuthType("register")}
      >
        Зарегистрироваться
      </p>
    </div>
  );
};

export default Login;
