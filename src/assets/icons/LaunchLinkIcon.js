import React from "react";

import LaunchIcon from "@mui/icons-material/Launch";

import { PRIMARY_COLOR_ACTIVE } from "../../data/constants";

const LaunchLinkIcon = ({ styleProps }) => {
  const { fill, width, height, ...otherStyle } = styleProps || {};
  return (
    <LaunchIcon
      sx={{
        width: width ? width : "24px",
        height: height ? height : "24px",
        fill: fill ? fill : PRIMARY_COLOR_ACTIVE,
        ml: 1.8,
        ...otherStyle,
      }}
    />
  );
};

export default LaunchLinkIcon;
