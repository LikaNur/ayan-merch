import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdClose, IoMdRemove, IoMdAdd } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  // Destructure context functions
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  // Destructure item properties
  const { id, title, image, price, amount } = item;

  return (
    // Container for each cart item
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* Link to the product detail page */}
        <Link to={`/product/${id}`}>
          {/* Product image */}
          <img className="max-w-[80px]" src={image} alt={title} />
        </Link>
        {/* Product details */}
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            {/* Link to the product detail page */}
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-normal hover:underline"
            >
              {title}
            </Link>
            {/* Button to remove item from cart */}
            <div
              onClick={() => removeFromCart(id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          {/* Quantity control and price */}
          <div className="flex gap-x-2 h-[36px] text-sm">
            {/* Quantity control */}
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-normal font-medium">
              {/* Button to decrease quantity */}
              <div
                onClick={() => decreaseAmount(id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer h-full"
              >
                <IoMdRemove />
              </div>
              {/* Display quantity */}
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              {/* Button to increase quantity */}
              <div
                onClick={() => increaseAmount(id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>
            {/* Price per item */}
            <div className="flex-1 flex items-center justify-around">
              {price} TJS
            </div>
            {/* Total price for the item */}
            <div className="flex-1 flex justify-end items-center text-normal font-medium">{`${parseFloat(
              price * amount
            ).toFixed(2)} TJS`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
