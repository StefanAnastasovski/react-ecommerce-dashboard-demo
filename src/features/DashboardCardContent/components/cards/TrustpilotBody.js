import React from "react";

import { Box } from "@mui/material";

import {
  LINK_N_TEXT_FONT_SIZE,
  PRIMARY_GREEN_COLOR_ACTIVE,
  WHITE_COLOR,
  FONT_WEIGHT_700,
} from "../../../../data/constants";

import Paragraph from "../../../../components/Typography/Paragraph";

const TrustpilotBody = () => {
  const fontSize = {
    fontSize: LINK_N_TEXT_FONT_SIZE,
  };
  const whiteText = {
    color: WHITE_COLOR,
  };

  const highlightedText = {
    color: PRIMARY_GREEN_COLOR_ACTIVE,
  };

  return (
    <>
      <Paragraph {...{ ...whiteText, ...fontSize }} my={2}>
        Show us your love by leaving a
        <Box component="span" {...highlightedText} px={0.5}>
          positive
        </Box>
        review on trust pilot and receive the extension of
        <Box
          component="span"
          {...whiteText}
          fontWeight={FONT_WEIGHT_700}
          pl={0.5}
        >
          50 additional products.
        </Box>
      </Paragraph>
    </>
  );
};

export default TrustpilotBody;
