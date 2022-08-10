import React from "react";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Header from "../../layout/Header";
import MainContainer from "../../layout/MainContainer/MainContainer";
import SideMenu from "../../layout/SideMenu";

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />

      <SideMenu />

      <MainContainer />
    </Box>
  );
};

export default Dashboard;
