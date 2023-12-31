
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const {id} = useParams();
  const restaurant = useRestaurant(id);
  console.log(restaurant)
  return (
    <>
      <div className="restaurant-menu">
        <img className="res_img" src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h1>Restaurant Name: {restaurant?.name}</h1>
        <h2>Cuisines : {restaurant?.cuisines.join(", ")}</h2>
        <h2>
          Distance : {restaurant?.areaName},{" "}
          {restaurant?.sla?.lastMileTravelString}
        </h2>

        <h2>Cost : {restaurant?.costForTwoMessage}</h2>
      </div>



      
    </>
  );
};
export default RestaurantMenu;
