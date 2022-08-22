import React from "react";

import { Divider } from "@mui/material";

import DrawerDropdown from "./components/DrawerDropdown";
import DrawerPrimaryMenu from "./components/DrawerPrimaryMenu";
import DrawerSecondaryMenu from "./components/DrawerSecondaryMenu";

const DrawerMenu = () => {
  return (
    <>
      <DrawerPrimaryMenu />

      <Divider />

      <DrawerSecondaryMenu />

      <DrawerDropdown />
    </>
  );
};

export default DrawerMenu;
