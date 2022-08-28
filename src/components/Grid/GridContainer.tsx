import React from "react";

import { Grid } from "@mui/material";
import GridContainerType from "../../@types/GridContainerType";

const GridContainer = ({
  children,
  spacing,
  direction,
  styleProps,
  otherProps,
}: GridContainerType) => {
  return (
    <Grid
      container
      spacing={spacing}
      direction={direction}
      sx={styleProps}
      {...otherProps}
    >
      {children}
    </Grid>
  );
};

export default GridContainer;
