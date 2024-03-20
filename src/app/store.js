import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import itemSlice from "../features/itemSlice";
export default configureStore({
  reducer: {
    user: userSlice,
    item: itemSlice
  }
});
