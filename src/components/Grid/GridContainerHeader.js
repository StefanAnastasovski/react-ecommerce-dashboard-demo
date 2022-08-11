import React from "react";

import GridContainer from "./GridContainer";

const GridContainerHeader = ({ children }) => {
  const styleProps = {
    sx: {
      direction: "row",
      justifyContent: "space-between",
      alignItems: "center",
      m: 2,
    },
  };
  return <GridContainer styleProps={styleProps}>{children}</GridContainer>;
};

export default GridContainerHeader;
