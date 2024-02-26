import { createSelector } from "reselect";

export const selectSortedProducts = createSelector(
  [
    (state) => state.products.products,
    (state) => state.products.sortBy,
    (state) => state.products.sortOrder,
    (state) => state.products.status,
  ],
  (products, sortBy, sortOrder, status) => {
    const sortedProducts = [...products].sort((a, b) => {
      if (sortOrder === "DESC") {
        return a[sortBy] > b[sortBy] ? 1 : -1;
      } else {
        // Если sortOrder === 'ASC'
        return a[sortBy] < b[sortBy] ? 1 : -1;
      }
    });
    return { sortedProducts, status };
  }
);
