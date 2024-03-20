import { addFavorite } from "../../features/userSlice";
import redHeart from "../../images/RedHeart.png";
import emptyHeart from "../../images/EmptyHeart.png";
import { useDispatch } from "react-redux";
const Item = ({ item, data }) => {
  const dispatch = useDispatch();
  function isLiked() {
    if (data && data.loggedIn != null) {
      const liked = data.loggedIn.favorites?.find(
        (favorite) => favorite.id === item.id
      );

      return liked ? true : false;
    } else return false;
  }
  function addToFavorites() {
    dispatch(addFavorite(item));
  }
  return (
    <span
      className="flex gap-1 cursor-pointer"
      onClick={() => addToFavorites()}
    >
      <img src={isLiked() ? redHeart : emptyHeart} alt="heart icon" />
      {item.n_of_likes}
    </span>
  );
};

export default Item;
