import React from "react";

import { Grid } from "@mui/material";

const GridItem = ({ children, ...otherProps }) => {
  return (
    <Grid item {...otherProps}>
      {children}
    </Grid>
  );
};

export default GridItem;
