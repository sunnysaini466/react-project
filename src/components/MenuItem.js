import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../constants";
import { addCart } from "../utils/cartSlice";

const MenuItem = ({ item }) => {
  const { id, name, description, price, imageId } = item;

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addCart(item));
  };

  return (
    <div
      className="flex justify-between basis-[848px] max-h-[180px] p-5 border-b border-gray"
      key={id}
    >
      <div className="flex flex-col basis-[400px]">
        <h3 className="font-bold text-lg w-3/5">{name}</h3>
        <p className="mt-1 text-base font-normal">
          {price > 0 ? "₹ " + item.price / 100 : " "}{" "}
        </p>
        <p className="mt-3.5 leading-5 text-gray-desc w-4/5 text-base overflow-hidden ">
          {description}
        </p>
      </div>

      <div className="flex flex-col justify-center items-center w-[118px] h-[150px]">
        <button
          className="px-2 py-1 mb-1 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
          onClick={() => handleAddItem(item)}
        >
          Add Item
        </button>
        {imageId && (
          <img
            className="w-[118px] h-[96px] mb-2"
            src={IMG_CDN_URL + imageId}
            alt={item?.name}
          />
        )}
      </div>
    </div>
  );
};

export default MenuItem;
