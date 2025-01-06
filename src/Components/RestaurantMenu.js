import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { resList } from "../Utils/mockData";
import Shimmer from "./Shimmer";
import { MENU_API } from "../Utils/constants";
import useFetchData from "../CustomHooks/useFetchData";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restInfo, setRestInfo] = useState([]);

  useEffect(() => {
    const selectedRest = resList.filter((res) => res.data.id === resId);
    // fetchMenu();
    setRestInfo(selectedRest);
  }, [resId]);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   const json = await data.json();
  //   // setRestInfo(json.data);
  // };
  const data = useFetchData(resId);   //Custom Hook the data will contain the return data from the api so we can use this directly as restInfo


  if (restInfo.length === 0) {
    return <Shimmer />;
  }

  const { name, restLists, cuisines } = restInfo[0]?.data;
  // const { name, cuisines, costForTwoMessage } =
  //   restInfo?.cards[0]?.card?.card?.info;

  return (
    <div>
      <h2 className="font-bold text-3xl p-5 m-5">{name}</h2>
      <ul>
        {restLists?.map((menuItem, index) => (
           <div className="flex p-4 m-4 flex-wrap border border-gray-200 bg-gray-100"  key={index}>
             <img src={menuItem?.imgAdd} className="w-40" />
             <div className="p-4 m-4">
               <p><span className="font-bold p-2">Dish:</span>{menuItem.specials}</p>
               <p><span className="font-bold p-2">Price:</span>{menuItem.price}</p>
               <p><span className="font-bold p-2">Cuisines:</span>{cuisines.join(",")}</p>
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
