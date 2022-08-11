import React from "react";

import Box from "@mui/material/Box";
import { Link } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

import {
  FONT_WEIGHT_500,
  LINK_N_TEXT_FONT_SIZE,
  WELCOME_SECTION_PATH,
  WHITE_COLOR,
} from "../../../../data/constants";

const ExternalLink = () => {
  const linkStyle = {
    sx: {
      display: "flex",
      pt: 1.5,
      fontSize: LINK_N_TEXT_FONT_SIZE,
      fontWeight: FONT_WEIGHT_500,
      color: WHITE_COLOR,
      textDecorationColor: WHITE_COLOR,
      cursor: "pointer",
    },
  };

  const linkIconStyle = {
    sx: {
      width: "24px",
      height: "24px",
      ml: 1.8,
      fill: `${WHITE_COLOR} !important`,
    },
  };

  return (
    <Box>
      <Link
        href={`https://${WELCOME_SECTION_PATH}`}
        target="_blank"
        {...linkStyle}
      >
        {WELCOME_SECTION_PATH}
        <LaunchIcon {...linkIconStyle} />
      </Link>
    </Box>
  );
};

export default ExternalLink;
