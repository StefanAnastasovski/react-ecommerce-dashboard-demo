import React from "react";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import { Header, MainContainer, SideMenu } from "../../layout";
import DashboardMainSection from "../../features/DashboardMainSection";

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />

      <SideMenu />

      <MainContainer page={<DashboardMainSection />} />
    </Box>
  );
};

export default Dashboard;
