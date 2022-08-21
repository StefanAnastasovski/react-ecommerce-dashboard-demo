import React from "react";

import { CARD_DETAILS, SIDEBAR_CARD_DETAILS } from "../../data/dashboardConfig";

import GridItem from "../../components/Grid/GridItem";
import DashboardCardContent from "../../features/DashboardCardContent/";

const Dashboard = () => {
  const cardContentStyle = {
    spacing: 3,
    wrap: "wrap",
  };

  return (
    <>
      {/* Main Content */}
      <GridItem xs={8}>
        <DashboardCardContent
          cardDetails={CARD_DETAILS}
          {...cardContentStyle}
        />
      </GridItem>

      {/* Sidebar*/}
      <GridItem xs={4}>
        <DashboardCardContent
          cardDetails={SIDEBAR_CARD_DETAILS}
          direction="column"
          {...cardContentStyle}
        />
      </GridItem>
    </>
  );
};

export default Dashboard;
