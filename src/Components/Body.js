import { useState } from "react";
import { resList } from "../Utils/mockData";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
    const [listOfRestorants, setListOfRestorants] = useState(resList)
    return (
      <div className="body">
        <div className="filter">
        <button onClick={() => {
            const restaurentList = listOfRestorants.filter(item => item.data.avgRating >4);
            setListOfRestorants(restaurentList)
        }}
        className="filter-btn"
        >Top Rated Restaurants</button>
        </div>
        <div className="res-container">
        {listOfRestorants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
        </div>
      </div>
    );
  };
export default Body;