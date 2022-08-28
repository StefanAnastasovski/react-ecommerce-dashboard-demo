import React from "react";

import { Box } from "@mui/material";

import Paragraph from "../Typography/Paragraph";
import { CARD_TITLE_FONT_SIZE_1, FONT_WEIGHT_500 } from "../../data/constants";
import CardDashboardHeaderDropdown from "./CardDashboardHeaderDropdown";
import ContentCardHeaderType from "../../@types/ContentCardHeaderType";

const MainContentCardHeader = ({
  icon,
  title,
  hasDropdown,
  hasRightElement,
  rightCardHeaderElement,
  styleProps,
}: ContentCardHeaderType) => {
  // const { fontSize, fontWeight, ...otherStyle } = styleProps.style || {};
  const containerStyle = {
    sx: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
  };
  const { fontSize, fontWeight, paddingLeft, ...otherProps } = styleProps;
  const paddingLeftDefaultValue = 1;
  const pLeft =
    paddingLeft || paddingLeft === 0 ? paddingLeft : paddingLeftDefaultValue;
  const titleStyle = {
    paddingLeft: pLeft,
    fontSize: styleProps.fontSize
      ? styleProps.fontSize
      : CARD_TITLE_FONT_SIZE_1,
    fontWeight: styleProps.fontWeight ? styleProps.fontWeight : FONT_WEIGHT_500,
    ...otherProps
  };
  return (
    <Box {...containerStyle}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {icon && icon}
        <Paragraph styleProps={titleStyle}>{title}</Paragraph>
      </Box>

      {hasDropdown && (
        <CardDashboardHeaderDropdown styleProps={{ padding: 0 }} />
      )}
      {hasRightElement && rightCardHeaderElement}
    </Box>
  );
};

export default MainContentCardHeader;
