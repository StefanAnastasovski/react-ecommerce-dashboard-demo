import React from "react";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MiniDrawer from "../../layout/Drawer";
import Header from "../../layout/Header/index";

import MainContainer from "../../layout/MainContainer/MainContainer";

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />

      <MiniDrawer />

      <MainContainer />
    </Box>
  );
};

export default Dashboard;
