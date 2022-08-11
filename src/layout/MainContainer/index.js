import React from "react";

import Box from "@mui/material/Box";

import WelcomeSection from "./WelcomeSection";

const MainContainer = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
      <WelcomeSection />
    </Box>
  );
};

export default MainContainer;
