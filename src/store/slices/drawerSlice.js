import { createSlice } from "@reduxjs/toolkit";

import { dropdownMenuItems, primaryMenuItems } from "../../data/sidebarData";

const initialState = {
  DRAWER_WIDTH: 255,
  isDrawerOpened: true,
  selectedMenuItemId: {
    id: primaryMenuItems[0].id,
    subId: "",
  },
  selectedDropdownItem: dropdownMenuItems[0].title,
  isExpanded: {},
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
    setSelectedMenuItem: (state, { payload: { id, subId } }) => {
      state.selectedMenuItemId = {
        id: id,
        subId: subId ? subId : "",
      };
    },
    setSelectedDropdownItem: (state, { payload: { title } }) => {
      state.selectedDropdownItem = title;
    },
    setIsExpanded: (state, { payload: { id, isExpandable } }) => {
      if (isExpandable) {
        state.isExpanded = {
          ...state.isExpanded,
          [id]: !state.isExpanded[id],
        };
      }
    },
  },
});

export const drawerReducer = drawerSlice.reducer;
export const drawerActions = drawerSlice.actions;

export const getDrawerWidth = () => {
  return drawerSlice.getInitialState().DRAWER_WIDTH;
};

export default drawerSlice;
