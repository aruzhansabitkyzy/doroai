import { createSlice } from "@reduxjs/toolkit";
import initialState from "../app/initialState";
export const itemSlice = createSlice({
  name: "item",
  initialState: initialState,
  reducers: {
    createItem :(state, action) => {
      state.items = [...state.items, action.payload]
    },
  },
});
export const { createItem } = itemSlice.actions;
export default itemSlice.reducer;
