import React from "react";

import GridContainer from "../../components/Grid/GridContainer";
import CardDashboardWrapper from "../../components/CardDashboard/CardDashboardWrapper";
import DashboardCardContentType from "../../@types/DashboardCardContentType";
import { Box } from "@mui/material";

const DashboardCardContent = ({
  cardDetails,
  direction,
  ...otherProps
}: DashboardCardContentType) => {
  const content = cardDetails.map(
    (
      { id, ...otherDetails }: { id: number; otherDetails: any },
      index: number
    ) => {
      const { header, body, footer, style }: any = otherDetails;
      return (
        <CardDashboardWrapper
          key={id}
          isLastCard={cardDetails.length - 1 === index}
          headerDetails={header}
          bodyDetails={body}
          footerDetails={footer}
          style={style || {}}
        />
      );
    }
  );

  return (
    <Box sx={{ width: "100%", marginLeft: "-24px" }}>
      <GridContainer
        styleProps={{
          margin: "0",
        }}
        direction={`${direction}`}
        {...otherProps}
        spacing={3}
      >
        {content}
      </GridContainer>
    </Box>
  );
};

export default DashboardCardContent;
