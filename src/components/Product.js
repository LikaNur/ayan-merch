import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { id, image, category, title, price } = product;

  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition rounded-3xl bg-white">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt={title}
            />
          </div>
          <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button onClick={() => addToCart(product, id)}>
              <div className="flex justify-center items-center text-normal w-10 h-10 bg-gray-100 rounded-xl hover:text-primary">
                <BsPlus className="text-2xl" />
              </div>
            </button>
            <Link
              to={`/product/${id}`}
              className="w-10 h-10 bg-white flex justify-center items-center text-primary drop-shadow-xl rounded-xl hover:bg-primary hover:text-white"
            >
              <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-sm capitalize text-gray-500">{category}</div>
      <Link to={`/product/${id}`}>
        <h2 className="font-semibold mb-1">{title}</h2>
      </Link>
      <div className="font-semibold">{price} TJS</div>
    </div>
  );
};

export default Product;
