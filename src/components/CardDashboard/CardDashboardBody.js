import React from "react";

import { Box } from "@mui/material";

const MainContentCardBody = ({ children, styleProps, ...otherProps }) => {
  return <Box sx={{...styleProps}}>{children}</Box>;
};

export default MainContentCardBody;
