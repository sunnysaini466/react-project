import { useEffect, useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setallRestaurants] = useState([]);
  const [filterRestaurants, setfilterRestaurants] = useState(restaurantList);

  useEffect(() => {
    getAllRestaurants();
  }, []);

  const isOnline = useOnline();
  if (!isOnline) {
    return <h2>Offile! Please check your internet connection</h2>;
  }

  async function getAllRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.73057979999999&lng=77.7758825&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //console.log(json.data);
    setallRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilterRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  }

  if (!allRestaurants) return null;
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          type="button"
          onClick={() => {
            const res = filterData(searchText, allRestaurants);
            setfilterRestaurants(res);
          }}
        >
          Search
        </button>
      </div>
      {/* condtional rendering */}
      {filterRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {filterRestaurants.map((restaurant) => {
            //  console.log(restaurant.info)
            return (
              <Link to={"/restaurant/" + restaurant?.info?.id}>
                <RestaurantCard
                  {...restaurant?.info}
                  key={restaurant?.info?.id}
                />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
