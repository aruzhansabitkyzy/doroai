import redHeart from "../../images/RedHeart.png";
import { React} from "react";
const FavoriteItem = ({ item }) => {
  return (
    <div className="flex justify-between align-middle items-center relative">
      <div className="flex">
        <img src={redHeart} alt="heart icon" />
        {item.n_of_likes}
      </div>
    </div>
  );
};

export default FavoriteItem;
