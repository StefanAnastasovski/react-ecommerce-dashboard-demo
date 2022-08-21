import React from "react";

import Box from "@mui/material/Box";

import { CARD_DETAILS, SIDEBAR_CARD_DETAILS } from "../../data/dashboardConfig";

import WelcomeSection from "../../features/WelcomeSection";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import CardContent from "./CardContent";

const MainContainer = () => {
  const cardContentStyle = {
    spacing: 3,
    wrap: "wrap",
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 0, marginBottom: 5 }}>
      <WelcomeSection />
      <GridContainer px={"40px"} mt={-6} columnSpacing={3}>
        {/* Main Content */}
        <GridItem xs={8}>
          <CardContent cardDetails={CARD_DETAILS} {...cardContentStyle} />
        </GridItem>

        {/* Sidebar*/}
        <GridItem xs={4}>
          <CardContent
            cardDetails={SIDEBAR_CARD_DETAILS}
            direction="column"
            {...cardContentStyle}
          />
        </GridItem>
      </GridContainer>
    </Box>
  );
};

export default MainContainer;
