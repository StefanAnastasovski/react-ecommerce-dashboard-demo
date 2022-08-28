import React from "react";

import Box from "@mui/material/Box";

import {
  BACKGROUND_LINEAR_GRADIENT_AQUA,
  FONT_WEIGHT_500,
  FONT_WEIGHT_600,
  LINK_N_TEXT_FONT_SIZE,
  WELCOME_MESSAGE_FONT_SIZE,
  WELCOME_SECTION_PATH,
  WHITE_COLOR,
} from "../../data/constants";
import { WELCOME_SECTION_USERNAME } from "../../data/dashboardConfig";

import Paragraph from "../../components/Typography/Paragraph";
import LaunchLinkIcon from "../../assets/icons/LaunchLinkIcon";
import ExternalLink from "../../components/ExternalLink";

const WelcomeSection = () => {
  const welcomeMessageStyle = {
    fontSize: WELCOME_MESSAGE_FONT_SIZE,
    fontWeight: FONT_WEIGHT_600,
    color: WHITE_COLOR,
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
      <Paragraph styleProps={welcomeMessageStyle}>
        Welcome {WELCOME_SECTION_USERNAME}!
      </Paragraph>

      <ExternalLink
        href={`https://${WELCOME_SECTION_PATH}`}
        styleProps={{
          fontSize: LINK_N_TEXT_FONT_SIZE,
          fontWeight: FONT_WEIGHT_500,
          color: WHITE_COLOR,
          textDecorationColor: WHITE_COLOR,
        }}
        text={WELCOME_SECTION_PATH}
        icon={<LaunchLinkIcon styleProps={{ fill: WHITE_COLOR }} />}
      />
    </Box>
  );
};

export default WelcomeSection;
