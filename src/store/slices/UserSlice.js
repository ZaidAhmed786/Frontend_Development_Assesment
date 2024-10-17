// slices/UserSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.user = action.payload; // Store user details
      state.isAuthenticated = true;
    },
    signIn: (state, action) => {
      state.user = action.payload; // Simulate login
      state.isAuthenticated = true;
    },
    signOut: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { signUp, signIn, signOut } = userSlice.actions;
export default userSlice.reducer;
