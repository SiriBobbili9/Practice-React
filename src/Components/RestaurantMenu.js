import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { resList } from "../Utils/mockData";
import Shimmer from "./Shimmer";
import { MENU_API } from "../Utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restInfo, setRestInfo] = useState([]);

  useEffect(() => {
    const selectedRest = resList.filter((res) => res.data.id === resId);
    fetchMenu();
    setRestInfo(selectedRest);
  }, [resId]);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    // setRestInfo(json.data);
  };


  if (restInfo.length === 0) {
    return <Shimmer />;
  }

  const { name, restLists, cuisines } = restInfo[0]?.data;
  // const { name, cuisines, costForTwoMessage } =
  //   restInfo?.cards[0]?.card?.card?.info;

  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {restLists?.map((menuItem, index) => (
           <div className="menu-card" key={index}>
             <img src={menuItem?.imgAdd} className="menu-logo" />
             <div className="menu-details">
               <p>Dish:{menuItem.specials}</p>
               <p>Price:{menuItem.price}</p>
               <strong>{cuisines.join(",")}</strong>
             </div>
           </div>
         ))}
        {/*{itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}*/}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
