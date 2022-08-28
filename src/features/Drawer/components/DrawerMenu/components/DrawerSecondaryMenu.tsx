import React from "react";

import { List } from "@mui/material";

import { secondaryMenuItems } from "../../../data/sidebarData";

import DrawerItem from "./DrawerItem";

const DrawerSecondaryMenu = () => {
  const menuItems = secondaryMenuItems.map((item) => {
    const { id, title, icon, link } = item;

    return (
      <DrawerItem
        key={id}
        data={{
          id: id, 
          title: title,
          icon: icon,
          link: link,
          subtitles: [],
        }}
        styleProps={{}}
      />
    );
  });

  return <List>{menuItems}</List>;
};

export default DrawerSecondaryMenu;
