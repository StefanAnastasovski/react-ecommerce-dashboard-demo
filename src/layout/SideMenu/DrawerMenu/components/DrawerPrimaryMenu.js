import React, { useState } from "react";

import { List } from "@mui/material";

import { primaryMenuItems } from "../../../../data/sidebarData";

import DrawerItem from "./DrawerItem";

const DrawerPrimaryMenu = () => {
  const [isExpanded, setIsExpanded] = useState({});

  const isExpandedHandler = (id) => {
    setIsExpanded((prevIsExpanded) => ({
      ...prevIsExpanded,
      [id]: !prevIsExpanded[id],
    }));
  };

  const menuItems = primaryMenuItems.map((item) => {
    const { id, title, subtitles, icon } = item;

    if (subtitles.length > 0) {
      return (
        <DrawerItem
          key={id}
          isExpanded={isExpanded[id] ? true : false}
          data={{
            title: title,
            icon: icon,
            subtitles: subtitles,
          }}
          onClick={() => isExpandedHandler(id)}
        />
      );
    }
    return (
      <DrawerItem
        key={id}
        data={{
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
