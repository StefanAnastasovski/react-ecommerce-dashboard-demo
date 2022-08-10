import React from "react";

import { Typography } from "@mui/material";

const Paragraph = ({ children, ...otherProps }) => {
  return (
    <Typography paragraph mb={0} {...otherProps}>
      {children}
    </Typography>
  );
};

export default Paragraph;
