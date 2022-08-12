import React from "react";

import Box from "@mui/material/Box";

import { WHITE_COLOR } from "../../data/constants";

import WelcomeSection from "./WelcomeSection";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import CardComponent from "../../components/ui/Card/Card";

const MainContainer = () => {
  const flexGrowStyle = {
    sx: { flexGrow: 1 },
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
      <WelcomeSection />
      <GridContainer px={"40px"} mt={-6} columnSpacing={3}>
        {/* Main Content */}
        <GridItem xs={8}>
          <GridContainer spacing={3} wrap={"wrap"}>
            <GridItem {...flexGrowStyle}>
              <CardComponent>Card #1</CardComponent>
            </GridItem>

            <GridItem {...flexGrowStyle}>
              <CardComponent>Card #2</CardComponent>
            </GridItem>
            <GridItem {...flexGrowStyle}>
              <CardComponent backgroundColor={"#F3A35C"} height={"auto"}>
                Card #3
              </CardComponent>
            </GridItem>

            <GridItem {...flexGrowStyle}>
              <CardComponent height={"auto"}>Card #4</CardComponent>
            </GridItem>

            <GridItem {...flexGrowStyle}>
              <CardComponent height={"auto"}>News</CardComponent>
            </GridItem>
          </GridContainer>
        </GridItem>

        {/* Sidebar*/}
        <GridItem xs={4}>
          <GridContainer spacing={3} wrap={"wrap"}>
            <GridItem {...flexGrowStyle}>
              <CardComponent>Card #1</CardComponent>
            </GridItem>

            <GridItem {...flexGrowStyle}>
              <CardComponent backgroundColor={"#000032"}>Card #2</CardComponent>
            </GridItem>
            <GridItem {...flexGrowStyle}>
              <CardComponent>Card #3</CardComponent>
            </GridItem>

            <GridItem {...flexGrowStyle}>
              <CardComponent>Card #4</CardComponent>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </Box>
  );
};

export default MainContainer;
