import React from "react";

import { List } from "@mui/material";

import { primaryMenuItems } from "../../../../data/sidebarData";

import DrawerItem from "./DrawerItem";

const DrawerPrimaryMenu = () => {
  const menuItems = primaryMenuItems.map((item) => {
    const { id, title, subtitles, icon } = item;

    if (subtitles.length > 0) {
      return (
        <DrawerItem
          key={id}
          data={{
            id: id,
            title: title,
            icon: icon,
            subtitles: subtitles,
          }}
        />
      );
    }
    return (
      <DrawerItem
        key={id}
        data={{
          id: id,
          title: title,
          icon: icon,
          subtitles: subtitles,
        }}
        styleProps={{}}
      />
    );
  });

  return <List>{menuItems}</List>;
};

export default DrawerPrimaryMenu;
