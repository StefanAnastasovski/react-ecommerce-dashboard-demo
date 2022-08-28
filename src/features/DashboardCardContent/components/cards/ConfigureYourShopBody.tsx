import React from "react";

import { Box } from "@mui/material";

import {
  LINK_N_TEXT_FONT_SIZE,
  CARD_COMPLETED_TEXT,
  FONT_WEIGHT_600,
  HEADER_BUTTON_FONT_SIZE,
  WELCOME_MESSAGE_FONT_SIZE,
  FONT_WEIGHT_500,
} from "../../../../data/constants";

import { DASHBOARD_API } from "../../../../data/dashboardConfig";

import Paragraph from "../../../../components/Typography/Paragraph";

const ConfigureYourShopBody = () => {
  const styledCompleted = {
    color: CARD_COMPLETED_TEXT,
    fontSize: WELCOME_MESSAGE_FONT_SIZE,
    fontWeight: FONT_WEIGHT_600,
    marginTop: 3,
  };

  const styledText = {
    color: CARD_COMPLETED_TEXT,
    fontSize: HEADER_BUTTON_FONT_SIZE,
    fontWeight: FONT_WEIGHT_500,
    display: "block",
    marginTop: -1.5,
  };

  const {
    configure_your_shop: { completed },
  } = DASHBOARD_API;

  const completedMessage =
    completed < 100
      ? "Complete all the steps to have a complete shop to best present to your customers."
      : "You complete all the steps.";

  return (
    <>
      <Paragraph styleProps={styledCompleted}>
        {completed}%
        <Box component="span" {...styledText}>
          Completed
        </Box>
      </Paragraph>
      <Paragraph styleProps={{fontSize: LINK_N_TEXT_FONT_SIZE, margin: "1em 0"}}>
        {completedMessage}
      </Paragraph>
    </>
  );
};

export default ConfigureYourShopBody;
