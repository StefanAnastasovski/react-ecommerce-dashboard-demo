import React from "react";

import { Box } from "@mui/material";

import {
  FONT_WEIGHT_600,
  MENU_FONT_SIZE,
  PRIMARY_COLOR_ACTIVE,
  WHITE_COLOR,
} from "../../../data/constants";

const LinkButton = ({ children, component, styleProps, ...otherProps }) => {
  const {
    backgroundColor,
    fontSize,
    fontWeight,
    textColor,
    padding,
    boxShadow,
    borderRadius,
    textDecoration,
    ...otherStyles
  } = styleProps || {};
  return (
    <Box
      component={component || "a"}
      sx={{
        padding: padding || "15px 52px",
        boxShadow:
          boxShadow ||
          "0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06)",
        borderRadius: borderRadius || "5px",
        textDecoration: textDecoration || "inherit",
        color: textColor || WHITE_COLOR,
        backgroundColor: backgroundColor || PRIMARY_COLOR_ACTIVE,
        fontSize: fontSize || MENU_FONT_SIZE,
        fontWeight: fontWeight || FONT_WEIGHT_600,
        ...otherStyles,
      }}
      {...otherProps}
    >
      {children}
    </Box>
  );
};

export default LinkButton;
