import Profile from "../components/ui/Profile";
import Button from "../components/ui/Button";
import Logo from "../components/ui/Logo";
import { useNavigate } from "react-router-dom";
const Header = ({ data, createPost }) => {
  const navigate = useNavigate()
  return (
    <div className="flex justify-between align-middle">
      <Logo />
      <div className="flex w-1/3 justify-between align-middle">
        <Button
          text={"Подать объявление"}
          onClick={createPost}
          style={"w-52 mt-1"}
        />
        <Profile name={data.loggedIn?.username} email={data.loggedIn?.email} onClick={() => navigate('/profile')}/>
      </div>
    </div>
  );
};

export default Header;
