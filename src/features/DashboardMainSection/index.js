import React from "react";

import { CARD_DETAILS, SIDEBAR_CARD_DETAILS } from "../../data/dashboardConfig";

import GridItem from "../../components/Grid/GridItem";
import CardContent from "../DashboardCardContent";

const DashboardMainSection = () => {
  const cardContentStyle = {
    spacing: 3,
    wrap: "wrap",
  };

  return (
    <>
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
    </>
  );
};

export default DashboardMainSection;
