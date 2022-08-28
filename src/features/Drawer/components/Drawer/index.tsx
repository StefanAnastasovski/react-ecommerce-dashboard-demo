import React from "react";
import { useSelector } from "react-redux";

import { CSSObject, styled, Theme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";

import { DRAWER_WIDTH } from "../../../../data/constants";

const openedMixin = (theme: Theme): CSSObject => {
  return {
    width: `${DRAWER_WIDTH}px`,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  };
};

const closedMixin = (theme: Theme): CSSObject => {
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

const DrawerComponent = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => {
  if (!open) open = useSelector((state: any) => state.drawer.isDrawerOpened);
  return {
    width: `${DRAWER_WIDTH}px`,
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

const Drawer = ({ children }: { children: React.ReactNode }) => (
  <DrawerComponent variant="permanent">{children}</DrawerComponent>
);

export default Drawer;
