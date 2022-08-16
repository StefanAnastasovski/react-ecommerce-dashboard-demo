import React from "react";

import { Box } from "@mui/material";

import Paragraph from "../../../../components/Typography/Paragraph";
import {
  CARD_DROPDOWN_COLOR_TEXT,
  CARD_TITLE_FONT_SIZE_1,
  FONT_WEIGHT_500,
} from "../../../../data/constants";

const MainContentCardHeader = ({ icon, title, hasDropdown }) => {
  const containerStyle = {
    sx: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "wrap"
    },
  };
  const titleStyle = {
    sx: {
      paddingLeft: 1,
      fontSize: CARD_TITLE_FONT_SIZE_1,
      fontWeight: FONT_WEIGHT_500,
    },
  };
  return (
    <Box {...containerStyle}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {icon}
        <Paragraph {...titleStyle}>{title}</Paragraph>
      </Box>

      {hasDropdown && (
        <Paragraph sx={{ color: CARD_DROPDOWN_COLOR_TEXT }}>Dropdown</Paragraph>
      )}
    </Box>
  );
};

export default MainContentCardHeader;
