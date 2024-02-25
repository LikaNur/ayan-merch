import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
  // Access products from ProductContext
  const { products } = useContext(ProductContext);

  // Filter products based on category
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  return (
    <div>
      {/* Render Hero component */}
      <Hero />
      {/* Product section */}
      <section className="py-16 bg-main">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[60px] max-w-sm mx-auto md:max-w-none md:max-0">
            {/* Map through filtered products and render Product component */}
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
