import React from "react";
import RestaurantNestedItemCategory from "../components/RestaurantNestedItemCategory";
import RestaurantItemCategory from "../components/RestaurantItemCategory";

const RestaurantMenuList = ({ menu }) => {
     //console.log('hello',menu)
  return (
    <div className="flex justify-center  mob:flex-col">
      <div className="mt-7 xl:w-[70%] lg:w-[70%] md:w-[70%] card-container">
        {menu.map((item, index) => (
          <div key={index}>
            {item.categories ? (
              <RestaurantNestedItemCategory nestedCategory={item} />
            ) : (
              <RestaurantItemCategory itemCategory={item} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenuList;