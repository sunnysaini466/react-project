import { useEffect, useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { Fetch_All_Restaurant } from "../constants";

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
}
console.log(Fetch_All_Restaurant)
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
    const data = await fetch(Fetch_All_Restaurant);
    const json = await data.json();

    setallRestaurants(
      json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilterRestaurants(
      json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
  }

  if (!allRestaurants) return null;
  return (
    <>
      <section
        id="projects"
        className="w-fit mx-auto justify-items-center justify-center  mt-10 mb-5"
      >
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
            required
          />
          <button
            type="button"
            onClick={() => {
              const res = filterData(searchText, allRestaurants);
              setfilterRestaurants(res);
            }}
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </section>
      {/* condtional rendering */}
      {filterRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <section
          id="Projects"
          className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
        >
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
        </section>
      )}
    </>
  );
};

export default Body;
