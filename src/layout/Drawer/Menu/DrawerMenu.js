import React from "react";

import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import {
  menuItems,
  menuAdditionalItems,
  // menuDropdownItems,
} from "../../../data/sidebarData";
import { useSelector } from "react-redux";

const DrawerMenu = () => {
  const open = useSelector((state) => state.drawer.isDrawerOpened);

  return (
    <>
      <List>
        {menuItems.map((item) => {
          const { id, title, icon } = item;
          return (
            <ListItem key={id} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {icon}
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ fontSize: 14 }}
                  primary={title}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        {menuAdditionalItems.map((item) => {
          const { id, title, icon } = item;

          return (
            <ListItem key={id} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {icon}
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ fontSize: 14 }}
                  primary={title}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default DrawerMenu;
