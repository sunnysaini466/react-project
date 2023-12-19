import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";

const RestaurantMenu = () => {
  const params = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menuInfo, setMenuInfo] = useState(null);

  useEffect(() => {
    getRestaurantMenuDetails();
  }, []);
  console.log(restaurant);
  async function getRestaurantMenuDetails() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.73057979999999&lng=77.7758825&restaurantId="+params.id
    );
    const json = await data.json();
    const restaurantInfo = json?.data?.cards[0]?.card?.card?.info;
    setRestaurant(restaurantInfo);
    let menuCards =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    if (menuCards === undefined) {
      menuCards =
        json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    }
    const menu = menuCards?.filter(
      (card) => card.card.card.itemCards !== undefined
    );
    setMenuInfo(menu);
    // return { restaurantInfo: resInfo, menuInfo };
  }

  return (
    <>
      <div className="restaurant-menu">
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
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
