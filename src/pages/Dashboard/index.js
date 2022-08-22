import React from "react";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import DashboardMainSection from "../../features/DashboardMainSection";

import Header from "../../layout/Header";
import SideMenu from "../../layout/SideMenu";
import MainContainer from "../../layout/MainContainer";

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />

      <SideMenu />

      <DashboardMainSection />
    </Box>
  );
};

export default Dashboard;
