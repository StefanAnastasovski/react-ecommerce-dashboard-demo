import { configureStore } from "@reduxjs/toolkit";
import { drawerReducer } from "../features/Drawer/slices/drawerSlice";

const store = configureStore({
  reducer: { drawer: drawerReducer },
});

export default store;
