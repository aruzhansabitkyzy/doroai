import OptionHeader from "./OptionHeader";
import Items from "./Items";
import { useSelector } from "react-redux";
const FavoriteItems = () => {
  const data = useSelector((state) => state.user);
  return (
    <>
      <OptionHeader
        onClick={() => {
        }}
        text={"Понравившиеся"}
      />

      <Items data={data}  type={"favorite"} />
    </>
  );
};

export default FavoriteItems;
