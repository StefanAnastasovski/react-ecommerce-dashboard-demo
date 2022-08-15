import React from "react";

import Box from "@mui/material/Box";

import {
  BACKGROUND_LINEAR_GRADIENT_AQUA,
  FONT_WEIGHT_600,
  WELCOME_MESSAGE_FONT_SIZE,
  WHITE_COLOR,
} from "../../../data/constants";
import { WELCOME_SECTION_USERNAME } from "../../../data/dashboardConfig";

import Paragraph from "../../../components/Typography/Paragraph";
import ExternalLink from "./components/ExternalLink";

const WelcomeSection = () => {
  const welcomeMessageStyle = {
    sx: {
      fontSize: WELCOME_MESSAGE_FONT_SIZE,
      fontWeight: FONT_WEIGHT_600,
      color: WHITE_COLOR,
    },
  };

  const welcomeSectionStyle = {
    sx: {
      display: "flex",
      justifyContent: "space-between",
      height: "182px",
      background: BACKGROUND_LINEAR_GRADIENT_AQUA,
      mt: "64px",
      padding: "40px 37px",
    },
  };

  return (
    <Box {...welcomeSectionStyle}>
      <Paragraph {...welcomeMessageStyle}>
        Welcome {WELCOME_SECTION_USERNAME}!
      </Paragraph>

      <ExternalLink />
    </Box>
  );
};

export default WelcomeSection;
