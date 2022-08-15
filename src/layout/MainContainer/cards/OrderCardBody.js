import React from "react";

import { Box } from "@mui/material";

import {
  FONT_WEIGHT_500,
  LINK_N_TEXT_FONT_SIZE,
  CARD_ORDER_BODY_COLOR_TEXT,
} from "../../../data/constants";

import { DASHBOARD_API } from "../../../data/dashboardConfig";

import Paragraph from "../../../components/Typography/Paragraph";

const OrderCardBody = () => {
  const styledText = {
    color: CARD_ORDER_BODY_COLOR_TEXT,
  };
  const styledValues = {
    sx: { fontSize: LINK_N_TEXT_FONT_SIZE, fontWeight: FONT_WEIGHT_500 },
  };

  const {
    orders: { orders_received, earnings },
  } = DASHBOARD_API;

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Paragraph {...styledText}>Orders received:</Paragraph>
        <Paragraph {...styledValues}>{orders_received}</Paragraph>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Paragraph {...styledText}>Earnings:</Paragraph>
        <Paragraph {...styledValues}>€ {earnings}</Paragraph>
      </Box>
    </>
  );
};

export default OrderCardBody;
