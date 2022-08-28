import React from "react";

import Box from "@mui/material/Box";

import WelcomeSection from "../../features/WelcomeSection";
import GridContainer from "../../components/Grid/GridContainer";
import { Grid } from "@mui/material";

const MainContainer = ({ page }: { page: React.ReactNode }) => {
  return (
    <Box component="main" sx={{ flexGrow: 1, marginBottom: 5 }}>
      <WelcomeSection />
      {/* Page */}

      <Box sx={{ padding: "0 40px", marginTop: "-4rem" }}>
        <GridContainer spacing={3}>{page}</GridContainer>
      </Box>
    </Box>
  );
};

export default MainContainer;
