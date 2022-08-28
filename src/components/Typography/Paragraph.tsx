import React from "react";

import { Typography } from "@mui/material";
import ParagraphType from "../../@types/ParagraphType";

const Paragraph = ({ children, styleProps, otherProps }: ParagraphType) => {
  return (
    <Typography paragraph mb={0} sx={{ ...styleProps }} {...otherProps}>
      {children}
    </Typography>
  );
};

export default Paragraph;
