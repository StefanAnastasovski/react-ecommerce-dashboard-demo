import React from "react";

import { Grid } from "@mui/material";
import GridItemType from "../../@types/GridItemType";

const GridItem = ({ children, xs, lg,  styleProps, otherProps }: GridItemType) => {
  return (
    <Grid item {...styleProps} {...otherProps} xs={xs} lg={lg}>
      {children}
    </Grid>
  );
};

export default GridItem;
