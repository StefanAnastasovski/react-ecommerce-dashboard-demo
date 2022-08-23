import React from "react";

import Box from "@mui/material/Box";
import { CssBaseline } from "@mui/material";
import Header from "../Header";
import SideMenu from "../SideMenu";
import MainContainer from "../MainContainer";

const MainLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <SideMenu />
      
      <Box sx={{flexGrow: 1}}>
        <Header />

        <MainContainer page={children} />
      </Box>
    </Box>
  );
};

export default MainLayout;
