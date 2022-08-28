import { createSlice } from "@reduxjs/toolkit";

import {
  dropdownMenuItems,
  primaryMenuItems,
  secondaryMenuItems,
} from "../data/sidebarData";

export interface DrawerStateType {
  isDrawerOpened?: boolean;
  selectedMenuItemId?: {
    id?: number | string;
    subId?: number | string;
  };
  url: string;
  selectedMenuItemTitle: string;
  selectedDropdownItem: string;
  isExpanded: any;
}

const initialState: DrawerStateType = {
  isDrawerOpened: true,
  selectedMenuItemId: {
    id: primaryMenuItems[0].id,
    subId: "",
  },
  url: "/",
  selectedMenuItemTitle: primaryMenuItems[0].title,
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
    setDrawerUrl: (state, { payload: { url } }) => {
      state.url = url;
    },
    setDrawerClose: (state) => {
      state.isDrawerOpened = false;
    },
    setSelectedMenuItem: (state, { payload: { id, subId } }) => {
      state.selectedMenuItemId = {
        id: id,
        subId: subId ? subId : "",
      };
      const matchedTitle = [...primaryMenuItems, ...secondaryMenuItems].find(
        (item) => {
          return item.id === id;
        }
      );
      state.selectedMenuItemTitle = (matchedTitle && matchedTitle.title) || "";
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

export default drawerSlice;
