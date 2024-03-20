import FavoriteItem from "./ui/FavoriteItem";
import ItemCard from "./ui/ItemCard";
import Item from "./ui/Item";
import { React, useEffect } from "react";
const Items = ({ data, type }) => {
  useEffect(() => {
  }, [data]);
  return (
    <div className="flex gap-3 flex-wrap pt-10">
      {type == "general" &&
        data.items?.map((item, index) => (
          <ItemCard item={item} key={index}>
            <Item item={item} data={data} />
          </ItemCard>
        ))}
      {type == "favorite" &&
        data.loggedIn?.favorites?.map((item, index) => (
          <ItemCard item={item} key={index}>
            <FavoriteItem item={item} />
          </ItemCard>
        ))}
    </div>
  );
};
export default Items;
