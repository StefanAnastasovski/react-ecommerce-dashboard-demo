import React from "react";

import { CARD_DETAILS, SIDEBAR_CARD_DETAILS } from "../../data/dashboardConfig";

import GridItem from "../../components/Grid/GridItem";
import DashboardCardContent from "../../features/DashboardCardContent";

const Dashboard = () => {
  return (
    <>
      {/* Main Content */}
      <GridItem xs={12} lg={8}>
        <DashboardCardContent cardDetails={CARD_DETAILS} direction="row" />
      </GridItem>

      {/* Sidebar*/}
      <GridItem xs={12} lg={4}>
        <DashboardCardContent
          cardDetails={SIDEBAR_CARD_DETAILS}
          direction="column"
        />
      </GridItem>
    </>
  );
};

export default Dashboard;
