import React from "react";

import { List } from "@mui/material";

import { primaryMenuItems } from "../../../data/sidebarData";

import DrawerItem from "./DrawerItem";
import { orders } from "../../../data/orders";

const DrawerPrimaryMenu = () => {
  const menuItems = primaryMenuItems.map((item) => {
    const { id, title, subtitles } = item;

    let hasNews = title === "Orders";

    if (subtitles.length > 0) {
      return <DrawerItem key={id} data={item} />;
    }
    return (
      <DrawerItem
        key={item.id}
        data={item}
        orders={hasNews && orders}
        styleProps={{}}
      />
    );
  });

  return <List>{menuItems}</List>;
};

export default DrawerPrimaryMenu;
