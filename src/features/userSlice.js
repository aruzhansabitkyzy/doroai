import { createSlice } from "@reduxjs/toolkit";
import initialState from "../app/initialState";
export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.loggedIn = action.payload;
    },
    logout: (state) => {
      state.loggedIn = null;
    },
    register: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    addFavorite: (state, action) => 
    {
      state.loggedIn.favorites = [...state.loggedIn.favorites, action.payload]
    }
  },
});
export const { login, logout, register, addFavorite } = userSlice.actions;
export default userSlice.reducer;
