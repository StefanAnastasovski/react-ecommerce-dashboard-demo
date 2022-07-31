import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  DRAWER_WIDTH: 255,
  isDrawerOpened: true,
};

const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    setDrawerOpen: (state) => {
      state.isDrawerOpened = true;
    },
    setDrawerClose: (state) => {
      state.isDrawerOpened = false;
    },
  },
});

export const drawerReducer = drawerSlice.reducer;
export const drawerActions = drawerSlice.actions;

export const getDrawerWidth = () => {
  return drawerSlice.getInitialState().DRAWER_WIDTH;
};

export default drawerSlice;
