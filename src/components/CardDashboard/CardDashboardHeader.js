import React from "react";

import { Box } from "@mui/material";

import Paragraph from "../Typography/Paragraph";
import {
  CARD_TITLE_FONT_SIZE_1,
  FONT_WEIGHT_500,
} from "../../data/constants";
import CardDashboardHeaderDropdown from "./CardDashboardHeaderDropdown";

const MainContentCardHeader = ({
  icon,
  title,
  hasDropdown,
  hasRightElement,
  rightCardHeaderElement,
  ...styleProps
}) => {
  const { fontSize, fontWeight, ...otherStyle } = styleProps.style || {};
  const containerStyle = {
    sx: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
  };
  const titleStyle = {
    sx: {
      paddingLeft: 1,
      fontSize: fontSize ? fontSize : CARD_TITLE_FONT_SIZE_1,
      fontWeight: fontWeight ? fontWeight : FONT_WEIGHT_500,
      ...otherStyle,
    },
  };
  return (
    <Box {...containerStyle}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {icon && icon}
        <Paragraph {...titleStyle}>{title}</Paragraph>
      </Box>

      {hasDropdown && <CardDashboardHeaderDropdown />}
      {hasRightElement && rightCardHeaderElement}
    </Box>
  );
};

export default MainContentCardHeader;
