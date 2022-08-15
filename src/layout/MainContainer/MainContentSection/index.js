import React from "react";

import { CARD_DETAILS } from "../../../data/dashboardConfig";

import GridContainer from "../../../components/Grid/GridContainer";
import CardWrapper from "./components/CardWrapper";

const MainContentSection = () => {
  return (
    <GridContainer spacing={3} wrap={"wrap"}>
      {CARD_DETAILS.map(({ id, ...otherDetails }) => {
        const { header, body, footer, style } = otherDetails;
        return (
          <CardWrapper
            key={id}
            headerDetails={header}
            bodyDetails={body}
            footerDetails={footer}
            style={style || {}}
          />
        );
      })}
    </GridContainer>
  );
};

export default MainContentSection;
