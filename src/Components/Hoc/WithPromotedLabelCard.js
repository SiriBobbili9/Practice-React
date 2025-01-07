// Higher Order Component

// input - RestaurantCard =>> RestaurantCardPromoted
 const WithPromotedRestaurantCard = (RestaurantCard) => {
    return (props) => {   //returning new component this will take the props
        return (
            <div>
            <label className="absolute bg-black text-white m-3 px-1 rounded-lg">Promoted</label>
            <RestaurantCard {...props}/>
            </div>
        )
    }
 }
 export default WithPromotedRestaurantCard