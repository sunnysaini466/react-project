import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import RestaurantMenuList from "./RestaurantMenuList";
import RestaurantInfo from "./RestaurantInfo"
import { useEffect, useState } from "react";
import { Fetch_Menu_Restaurant } from "../constants";

const RestaurantMenu = () => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);

  const { id } = useParams(); /* Read dynamic URL params */

  useEffect(() => {
    // console.log('render 1');
    getRestaurantMenu();
    //console.log('render 2');
  }, []);

  async function getRestaurantMenu() {
    /** get the API data */
    /* Live Data */
    const response = await fetch(Fetch_Menu_Restaurant + id);
    const res_data = await response.json();

    const menuItemsList =
      res_data.data.cards[2]["groupedCard"].cardGroupMap.REGULAR.cards;
    const itemCategory =
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    const NestedItemCategory =
      "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";

    const menu = menuItemsList.map((item) => {
      if (
        item.card.card["@type"] === itemCategory ||
        item.card.card["@type"] === NestedItemCategory
      ) {
        return item.card.card;
      }
    });
    const modifiedData = {
      info: res_data.data.cards[0].card.card.info,
      menu: menu.filter((value) => value !== undefined),
    };

    setRestaurantDetails(modifiedData);
  }

  //console.log('my data' , restaurantDetails)

  return (
    restaurantDetails && (
      <div className="container">
        <RestaurantInfo {...restaurantDetails.info} />
        <RestaurantMenuList menu={restaurantDetails.menu} />
      </div>
    )
  );
};
export default RestaurantMenu;
