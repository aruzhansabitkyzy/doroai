import logoutpic from "../images/logout.png";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { useModal } from "../context/ModalContext";
import Button from "./ui/Button";
const Logout = () => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  function logoutUser() {
    dispatch(logout);
  }
  return (
    <div>
      <img src={logoutpic} />
      <p className="font-bold">Вы действительно хотите выйти с приложения?</p>
      <Button text={"Выйти"} onClick={() => logoutUser()} />
      <p onClick={closeModal}>Отмена</p>
    </div>
  );
};
export default Logout;
