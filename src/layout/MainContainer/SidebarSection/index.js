import React from "react";

import { SIDEBAR_CARD_DETAILS } from "../../../data/dashboardConfig";

import GridContainer from "../../../components/Grid/GridContainer";
import CardWrapper from "../MainContentSection/components/CardWrapper";

const SidebarSection = () => {
  return (
    <GridContainer spacing={3} wrap={"wrap"} direction="column">
      {SIDEBAR_CARD_DETAILS.map(({ id, ...otherDetails }) => {
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

export default SidebarSection;
