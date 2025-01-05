import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { resList } from "../Utils/mockData";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(typeof resId, "cls123");
  const [restInfo, setRestInfo] = useState([]);

  useEffect(() => {
    const selectedRest = resList.filter((res) => res.data.id === resId);
    setRestInfo(selectedRest);
  }, [resId]);

  if (restInfo.length === 0) {
    return <Shimmer />;
  }

  const { name, restLists, cuisines } = restInfo[0]?.data;

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
      </ul>
    </div>
  );
};

export default RestaurantMenu;
