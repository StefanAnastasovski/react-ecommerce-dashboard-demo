import React from "react";

import Box from "@mui/material/Box";

import WelcomeSection from "../../features/WelcomeSection";
import GridContainer from "../../components/Grid/GridContainer";

const MainContainer = ({ page }) => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 0, marginBottom: 5 }}>
      <WelcomeSection />

      {/* Page */}
      <GridContainer px={"40px"} mt={-6} columnSpacing={3}>
        {page}
      </GridContainer>
    </Box>
  );
};

export default MainContainer;
