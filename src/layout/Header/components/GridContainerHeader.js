import React from "react";

import { Grid } from "@mui/material";

const GridContainerHeader = ({ children }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ my: 2, mx: 2 }}
    >
      {children}
    </Grid>
  );
};

export default GridContainerHeader;
