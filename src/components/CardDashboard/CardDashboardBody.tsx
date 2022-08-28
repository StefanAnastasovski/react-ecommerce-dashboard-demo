import React from "react";

import { Box } from "@mui/material";

import ContentCardBodyType from "../../@types/ContentCardBodyType";

const MainContentCardBody = ({ children, styleProps }: ContentCardBodyType) => {
  return <Box sx={{ ...styleProps }}>{children}</Box>;
};

export default MainContentCardBody;
