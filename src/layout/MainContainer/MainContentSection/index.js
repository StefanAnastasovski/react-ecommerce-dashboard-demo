import React from "react";

import GridContainer from "../../../components/Grid/GridContainer";
import { CARD_DETAILS } from "../../../data/dashboardConfig";
import CardWrapper from "./components/CardWrapper";

const MainContentSection = () => {
  return (
    <GridContainer spacing={3} wrap={"wrap"}>
      {CARD_DETAILS.map(({id, ...otherDetails}) => {
        const { header, body, footer } = otherDetails;
        return <CardWrapper key={id} headerDetails={header} bodyDetails={body} footerDetails={footer} />;
      })}
    </GridContainer>
  );
};

export default MainContentSection;
