import { useEffect, useState } from "react";
import { resList } from "../Utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../CustomHooks/useOnlineStatus";
import WithPromotedRestaurantCard from "./Hoc/WithPromotedLabelCard";
const Body = () => {
  const [listOfRestorants, setListOfRestorants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchTxt, setSearchTxt] = useState("");
  useEffect(() => {
    fetchData();
    setListOfRestorants(resList);
    setFilteredRestaurants(resList)
  }, []);

  const RestaurantCardPromoted = WithPromotedRestaurantCard(RestaurantCard)

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    ); //ADD Cors Extension to browser inorder avoid the cors policy (origin mismatches)
    const json = await data.json();
    console.log(json?.data?.cards[4].card?.card.gridElements?.infoWithStyle?.restaurants);
    // setListOfRestorants(json.data.cards[4].card.card.gridElements?.infoWithStyle?.restaurants);  //With api data
    // setFilteredRestaurants(json.data.cards[4].card.card.gridElements?.infoWithStyle?.restaurants)
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) {
    return <h1>Looks like Something went Wrong please check the internet connection</h1>
  }
 

  return listOfRestorants.length === 0 ? <Shimmer /> : 
   (
    <div className="body">
      <div className="flex">
        <div className="search">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchTxt}
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          />
          <button
          className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
                // setAllRestaurants(listOfRestorants)

              const filteredSearch = listOfRestorants.filter((res) =>
                res.data.name.toLowerCase().includes(searchTxt.toLowerCase())
              );
              setFilteredRestaurants(filteredSearch);
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            const restaurentList = filteredRestaurants.filter(
              (item) => item.data.avgRating > 4
            );
            setFilteredRestaurants(restaurentList);
          }}
          className="px-4 py-2 bg-green-100 m-4 rounded-lg"
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => {
          console.log(restaurant);
          return restaurant?.data?.promoted ? (
            <RestaurantCardPromoted resData={restaurant} />
          ) : (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          );

          // <RestaurantCard key={restaurant.info.id} resData={restaurant} />  //WIth APi Data
        })}
      </div>
    </div>
  );
};
export default Body;
