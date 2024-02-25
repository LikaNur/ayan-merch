import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  // Get product ID from URL params
  const { id } = useParams();

  // Access products from ProductContext
  const { products } = useContext(ProductContext);

  // Access addToCart function from CartContext
  const { addToCart } = useContext(CartContext);

  // Find product by ID
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  // Render loading message if product not found
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  // Destructure product details
  const { title, price, description, image } = product;

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Product image */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img
              className="max-w-[200px] lg:max-w-sm"
              src={image}
              alt="details"
            />
          </div>
          {/* Product details */}
          <div className="flex-1 text-center lg:text-left">
            {/* Product title */}
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            {/* Product price */}
            <div className="text-xl font-medium mb-6 text-primary">
              {price} TJS
            </div>
            {/* Product description */}
            <p className="text-gray-500 mb-8">{description}</p>
            {/* Add to cart button */}
            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-primary py-4 px-8 text-white font-semibold text-xl hover:bg-opacity-90 rounded-2xl mt-6"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
