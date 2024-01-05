import { useEffect, useState } from "react";
import { Fetch_Menu_Restaurant } from "../constants";

const useRestaurant = (resId) => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  //console.log(resId)
  // call the API
  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    /** get the API data */
    /* Live Data */
    const response = await fetch(Fetch_Menu_Restaurant + resId);
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
  return restaurantDetails; /* return the data after fetching from api */
};

export default useRestaurant;
