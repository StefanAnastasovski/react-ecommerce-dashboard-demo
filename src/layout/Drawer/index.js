import React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import DrawerHeader from "./Header/DrawerHeader";
import DrawerMenu from "./Menu/DrawerMenu";

import { getDrawerWidth } from "../../store/slices/drawerSlice";
import { useSelector } from "react-redux";

const DRAWER_WIDTH = getDrawerWidth();

const openedMixin = (theme) => {
  return {
    width: DRAWER_WIDTH,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  };
};

const closedMixin = (theme) => {
  return {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  };
};

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => {
  if (!open) open = useSelector((state) => state.drawer.isDrawerOpened);
  return {
    width: DRAWER_WIDTH,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  };
});

const MiniDrawer = () => {
  return (
    <Drawer variant="permanent">
      <DrawerHeader />
      <DrawerMenu />
    </Drawer>
  );
};

export default MiniDrawer;
