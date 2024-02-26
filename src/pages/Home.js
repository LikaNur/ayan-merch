import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import Hero from "../components/Hero";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  setSortOrder as setProductSortOrder,
} from "../redux/productsSlice";
import Select from "react-select";
import { fetchCategories } from "../redux/categoriesSlice";
import { selectSortedProducts } from "../redux/selectors";
import { Loader } from "../components/Loader";

const allOption = { label: "All", value: "All" };
const sortOrderOptions = [
  {
    label: "DESC",
    value: "DESC",
  },
  {
    value: "ASC",
    label: "ASC",
  },
];
const Home = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(allOption);
  const [sortOrder, setSortOrder] = useState(sortOrderOptions[0]);
  const { categories, status: categoriesStatus } = useSelector((state) => {
    return state.categories;
  });

  const { sortedProducts, status: productsStatus } =
    useSelector(selectSortedProducts);

  useEffect(() => {
    dispatch(fetchProducts(selectedCategory.value));
    dispatch(fetchCategories());
  }, [dispatch, selectedCategory]);

  useEffect(() => {
    dispatch(setProductSortOrder(sortOrder.value));
  }, [dispatch, sortOrder]);

  const selectOptions = categories.map((element) => ({
    value: element,
    label: element,
  }));

  if (productsStatus === "loading" || categoriesStatus === "loading")
    return <Loader />;

  return (
    <div>
      <Hero />
      <div className="bg-main py-16">
        <h1 className="text-center text-4xl font-semibold">
          Search our products by category or price
        </h1>
        <div className="flex justify-center gap-3 py-16">
          <Select
            className="block text-lg w-[300px] font-medium capitalize leading-9 text-gray-900"
            styles={{
              control: (base) => ({
                ...base,
                backgroundColor: "#ffffff",
                borderColor: "#F3F5F6",
                boxShadow: "none",
                borderRadius: "10px",
                "&:hover": {
                  borderColor: "#b1b1b1",
                },
              }),
              option: (base, { isFocused }) => ({
                ...base,
                backgroundColor: isFocused ? "#02AF66" : "#ffffff",
                color: "#black",
              }),
            }}
            onChange={(element) => setSelectedCategory(element)}
            value={selectedCategory}
            options={[allOption, ...selectOptions]}
          />
          <Select
            className="block text-lg w-[300px] font-medium capitalize leading-9 text-gray-900"
            styles={{
              control: (base) => ({
                ...base,
                backgroundColor: "#ffffff",
                borderColor: "#F3F5F6",
                boxShadow: "none",
                borderRadius: "10px",
                "&:hover": {
                  borderColor: "#b1b1b1",
                },
              }),
              option: (base, { isFocused }) => ({
                ...base,
                backgroundColor: isFocused ? "#02AF66" : "#ffffff",
                color: "#black",
              }),
            }}
            onChange={(element) => setSortOrder(element)}
            value={sortOrder}
            options={sortOrderOptions}
          />
        </div>
      </div>
      <section className="py-8 bg-main">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[60px] max-w-sm mx-auto md:max-w-none md:max-0">
            {sortedProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
