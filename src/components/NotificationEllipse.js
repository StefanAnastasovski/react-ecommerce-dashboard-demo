import React from "react";

import { Box } from "@mui/material";
import { MENU_FONT_SIZE, WHITE_COLOR } from "../data/constants";

const NotificationEllipse = ({ backgroundColor, children }) => {
  return (
    <Box
      sx={{
        padding: "2px 10px",
        borderRadius: "50%",
        backgroundColor,
        display: "flex",
        fontSize: MENU_FONT_SIZE,
        color: WHITE_COLOR,
      }}
    >
      {children}
    </Box>
  );
};

export default NotificationEllipse;
