import React from "react";

import { Typography } from "@mui/material";

const Paragraph = ({ children, ...otherProps }) => {
  return (
    <Typography component="p" {...otherProps}>
      {children}
    </Typography>
  );
};

export default Paragraph;
