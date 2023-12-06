import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  totalRatingsString,
}) => {
  return (
    <div className="card">
      <img alt="Burger" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h3>{totalRatingsString}</h3>
    </div>
  );
};

export default RestaurantCard;
