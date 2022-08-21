import React from "react";

import Box from "@mui/material/Box";
import { CssBaseline } from "@mui/material";
import Header from "../Header";
import SideMenu from "../SideMenu";
import MainContainer from "../MainContainer";

const MainLayout = ({ page }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />

      <SideMenu />

      <MainContainer page={page} />
    </Box>
  );
};

export default MainLayout;
