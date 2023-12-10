import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRatingString,
  costForTwo
}) => {
  
  return (
    <div className="card">
      <img alt="Burger" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2> 
      <h2>{costForTwo}</h2> 
      {/* <h3>{cuisines.join(", ")}</h3> */}
      <h3>{avgRatingString?avgRatingString:"No "} Ratings</h3>
    </div>
  );
};

export default RestaurantCard;
