import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [] // Initialize products as an empty array
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            // Check if the product already exists in the cart
            const existingProduct = state.products.find(p => p.id === action.payload.id);
            if (existingProduct) {
                // If it exists, increase the quantity
                existingProduct.quantity += 1; 
            } else {
                // If it doesn't exist, add it with a quantity of 1
                state.products.push({ ...action.payload, quantity: 1 });
            }
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload);
        },
        increaseQuantity: (state, action) => {
            const product = state.products.find(p => p.id === action.payload);
            if (product) {
                product.quantity += 1; 
            }
        },
        decreaseQuantity: (state, action) => {
            const product = state.products.find(p => p.id === action.payload);
            if (product && product.quantity > 1) {
                product.quantity -= 1; 
            }
        },
    }
})

export const { addProduct, removeProduct, increaseQuantity, decreaseQuantity } = productSlice.actions;
export default productSlice.reducer;
