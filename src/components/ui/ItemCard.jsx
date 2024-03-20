import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
const ItemCard = ({ item, children }) => {
  const data = useSelector((state) => state.user.loggedIn);
  return (
    <div className="flex flex-col justify-between p-2 w-52 rounded-md bg-white shadow-md shadow-slate-300 text-left">
      <img src={item.images[0]} className="rounded-md w-52 h-28 font-bold" />
      <p className="font-bold ">{item.name}</p>
      <p className="text-maine font-bold">{item.price} $</p>
      {children}
    </div>
  );
};

export default ItemCard;
