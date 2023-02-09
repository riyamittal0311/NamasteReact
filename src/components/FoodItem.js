import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeItems } from "../util/cartSlice";

import { IMG_CDN } from "../config";

const FoodItem = ({ items }) => {
  return (
    <>{items.length > 0 && items.map((item) => <RenderItem item={item} />)}</>
  );
};

const RenderItem = ({ item }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [itemCount, setItemCount] = useState(
    cartItems.find((cartItem) => cartItem.id == item.id)?.qty
      ? cartItems.find((cartItem) => cartItem.id == item.id)?.qty
      : 0
  );
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    console.log("called add");
    setItemCount((count) => count + 1);
    dispatch(addToCart(item));
  };

  const handleRemoveItem = (item) => {
    setItemCount((count) => +count - 1);
    dispatch(removeItems(item));
  };
  return (
    <div className="m-4 p-2 shadow-md rounded-md border-2 hover:bg-blue-50">
      <div key={item.id}>
        <div className="flex">
          <span>
            <i
              className={`fa fa-dot-circle-o ${
                item.isVeg === 1 ? "text-green-700" : "text-red-700"
              }`}
              aria-hidden="true"
            ></i>
          </span>
          {item.isBestSeller ? (
            <span className="flex items-center ml-3 text-red-600 font-bold text-xs">
              Bestseller
            </span>
          ) : null}
        </div>
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold">{item?.name}</h3>
            <h3 className="text-sm mt-2 mb-2">
              Price:{" "}
              <span className="font-bold">₹{parseInt(+item?.price / 100)}</span>
            </h3>
            <p className="text-gray-500 text-xs ">{item?.description}</p>
          </div>
          <div className="flex justify-center flex-col w-28">
            <img src={`${IMG_CDN}/${item?.cloudinaryImageId}`} />
            <div>
              {itemCount === 0 ? (
                <div
                  className="text-sm p-1 font-bold border border-cyan-700 text-cyan-700  hover:bg-cyan-700 hover:text-white flex justify-center"
                  type="button"
                  onClick={() => handleAddItem(item)}
                >
                  Add
                </div>
              ) : (
                <div className="flex justify-evenly border border-cyan-700 text-cyan-700 items-center">
                  <div
                    className="cursor-pointer font-bold text-lg"
                    onClick={() => handleRemoveItem(item)}
                  >
                    -
                  </div>
                  <div className="text-md">{itemCount}</div>
                  <div
                    className="cursor-pointer font-bold text-lg"
                    onClick={() => handleAddItem(item)}
                  >
                    +
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
