import React from "react";

import { Drawer, DrawerHeader, DrawerMenu } from "../../features/Drawer";

const SideMenu = () => {
  return (
    <Drawer>
      <DrawerHeader />
      <DrawerMenu />
    </Drawer>
  );
};

export default SideMenu;
