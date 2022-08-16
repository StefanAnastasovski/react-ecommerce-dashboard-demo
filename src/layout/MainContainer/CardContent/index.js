import React from "react";

import GridContainer from "../../../components/Grid/GridContainer";
import CardWrapper from "./components/CardWrapper";

const MainContentSection = ({ cardDetails, direction, ...otherProps }) => {
  const content = cardDetails.map(({ id, ...otherDetails }) => {
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
  });

  return (
    <GridContainer
      direction={direction}
      {...otherProps}
    >
      {content}
    </GridContainer>
  );
};

export default MainContentSection;
