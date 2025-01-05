import { useNavigate } from "react-router-dom";
import { CDN_URL } from "../Utils/constants";

const RestaurantCard = (props) => {
  const navigate=useNavigate()
    const { resData } = props;
    console.log(resData.data.id)
    const {
      imgLink,
      name,
      avgRating,
      cuisines,
      costForTwo,
      deliveryTime,
    } = resData?.data;
    // const {
    //   // imgLink,
    //   cloudinaryImageId, 
    //   name,
    //   avgRating,
    //   cuisines,
    //   costForTwo,
    //   deliveryTime,
    // } = resData?.info;  //With api data
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }} onClick={() => navigate(`/restaurants/${resData.data.id}`)}>
      {/*<div className="res-card" style={{ backgroundColor: "#f0f0f0" }} onClick={() => navigate(`/restaurants/${resData.data.id}`)}>*/}
        <img
          className="res-logo"
          alt="res-logo"
          src={imgLink}
          // src={CDN_URL + cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>₹{costForTwo / 100} FOR TWO</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    );
  };
  export default RestaurantCard