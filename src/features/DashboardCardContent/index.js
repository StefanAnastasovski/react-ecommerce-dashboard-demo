import React from "react";

import GridContainer from "../../components/Grid/GridContainer";
import CardDashboardWrapper from "../../components/CardDashboard/CardDashboardWrapper";

const DashboardCardContent = ({ cardDetails, direction, ...otherProps }) => {
  const content = cardDetails.map(({ id, ...otherDetails }, index) => {
    const { header, body, footer, style } = otherDetails;
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
  });

  return (
    <GridContainer direction={direction} {...otherProps}>
      {content}
    </GridContainer>
  );
};

export default DashboardCardContent;
