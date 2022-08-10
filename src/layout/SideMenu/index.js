import React from "react";

import Drawer from "./Drawer";
import DrawerHeader from "./DrawerHeader";
import DrawerMenu from "./DrawerMenu";

const SideMenu = () => {
  return (
    <Drawer>
      <DrawerHeader />
      <DrawerMenu />
    </Drawer>
  );
};

export default SideMenu;
