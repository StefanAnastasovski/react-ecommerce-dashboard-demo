import React from "react";

import { Box } from "@mui/material";
import { MENU_FONT_SIZE, WHITE_COLOR } from "../data/constants";
import NotificationEllipseType from "../@types/NotificationEllipseType";

const NotificationEllipse = ({
  children,
  styleProps,
  otherProps,
}: NotificationEllipseType) => {
  return (
    <Box
      sx={{
        padding: "2px 10px",
        borderRadius: "50%",
        display: "flex",
        fontSize: MENU_FONT_SIZE,
        color: WHITE_COLOR,
        ...styleProps,
      }}
      {...otherProps}
    >
      {children}
    </Box>
  );
};

export default NotificationEllipse;
