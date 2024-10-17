// slices/CartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
  deliveryFee: 5,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.items.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
      state.totalPrice += product.price;
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const product = state.items.find(item => item.id === productId);
      if (product) {
        state.totalPrice -= product.price * product.quantity;
        state.items = state.items.filter(item => item.id !== productId);
      }
    },
    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.items.find(item => item.id === productId);
      if (product) {
        product.quantity += 1;
        state.totalPrice += product.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.items.find(item => item.id === productId);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        state.totalPrice -= product.price;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export const selectTotalPrice = (state) => state.cart.totalPrice + state.cart.deliveryFee;
export default cartSlice.reducer;
