import Sidebar from "../components/Sidebar";
import { React, useState } from "react";
import FavoriteItems from "../components/FavoriteItems";
import Popup from "../components/ui/Popup";
import Logout from "../components/Logout";

const Profile = () => {
  const [option, setOption] = useState("favorite");
  return (
    <div className="flex">
      <Sidebar />
      <div>{option == "favorite" && <FavoriteItems />}</div>
      <div>
        {option == "logout" && (
          <Popup>
            <Logout />
          </Popup>
        )}
      </div>
    </div>
  );
};
export default Profile;
