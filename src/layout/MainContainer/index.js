import React from "react";

import Box from "@mui/material/Box";

import WelcomeSection from "./WelcomeSection";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import MainContentSection from "./MainContentSection";

const MainContainer = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
      <WelcomeSection />
      <GridContainer px={"40px"} mt={-6} columnSpacing={3}>
        {/* Main Content */}
        <GridItem xs={8}>
          <MainContentSection />
        </GridItem>

        {/* Sidebar*/}
        <GridItem xs={4}>
        </GridItem>
      </GridContainer>
    </Box>
  );
};

export default MainContainer;
