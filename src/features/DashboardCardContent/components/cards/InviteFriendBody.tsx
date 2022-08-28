import React from "react";

import { Box } from "@mui/material";

import {
  LINK_N_TEXT_FONT_SIZE,
  PRIMARY_GREEN_COLOR_ACTIVE,
  FONT_WEIGHT_700,
} from "../../../../data/constants";

import Paragraph from "../../../../components/Typography/Paragraph";

const InviteFriendBody = () => {
  const styledCompleted = {
    fontSize: LINK_N_TEXT_FONT_SIZE,
  };

  const highlightedText = {
    color: PRIMARY_GREEN_COLOR_ACTIVE,
    fontSize: LINK_N_TEXT_FONT_SIZE,
    fontWeight: FONT_WEIGHT_700,
  };

  return (
    <>
      <Paragraph styleProps={{...styledCompleted, padding: "1em 0"}}>
        <Box component="span" {...highlightedText} pr={0.5}>
          Receive 50 products
        </Box>
        by inviting a friend who subscribes to a plan. Your friend will receive
        a 30% discount coupon valid for any plan.
      </Paragraph>
    </>
  );
};

export default InviteFriendBody;
