import Profile from "./ui/Profile";
import { useSelector } from "react-redux";
import SidebarOption from "./ui/SidebarOption";
import favorite from "../images/favorite.png";
import saved from "../images/saved.png";
import logout from "../images/logout-icon.png";
import Avatar from "./ui/Avatar";
import { useDispatch } from "react-redux";
import { useModal } from "../context/ModalContext";
const Sidebar = () => {
  const user = useSelector((state) => state.user);
  const { openModal } = useModal();
  const dispatch = useDispatch();
  return (
    <div className="w-1/3 bg-white p-7 flex flex-col">
      <div className="ml-4 flex gap-2 cursor-pointer">
        <Avatar />
        <span>
          <div className="text-newblack font-bold">
            {user.loggedIn?.name ? user.loggedIn?.name : "Not given"}
          </div>
          <div className="">
            {user.loggedIn?.email ? user.loggedIn?.email : "Not given"}
          </div>
        </span>
      </div>
      <div className="ml-3 mt-5">
        <SidebarOption
          image={favorite}
          text={"Понравившиеся"}
          link={"/favorite"}
          active={true}
        />
        <SidebarOption
          image={saved}
          text={"Мои товары"}
          link={"/my-products"}
          active={false}
        />
        <SidebarOption
          image={logout}
          text={"Выйти"}
          active={false}
          onClick={() => openModal}
        />
      </div>
    </div>
  );
};
export default Sidebar;
