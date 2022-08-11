import React from "react";

import { Grid } from "@mui/material";

const GridContainer = ({ children, styleProps, ...otherProps }) => {
  return (
    <Grid container {...styleProps} {...otherProps}>
      {children}
    </Grid>
  );
};

export default GridContainer;
