// slices/ProductSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      name: "Product 1",
      price: 20,
      rating: 4,
      description: "Demo product 1",
    },
    {
      id: 2,
      name: "Product 2",
      price: 30,
      rating: 5,
      description: "Demo product 2",
    },
    // Add more demo products as needed
  ],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export const selectAllProducts = (state) => state.product.products;
export default productSlice.reducer;
