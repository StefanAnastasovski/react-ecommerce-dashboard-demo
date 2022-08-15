import React from "react";

import { FONT_WEIGHT_500 } from "../../../data/constants";
import { DASHBOARD_API } from "../../../data/dashboardConfig";

import Paragraph from "../../../components/Typography/Paragraph";

const VisitorCardBody = () => {
  const styledText = {
    sx: { fontSize: "42px", fontWeight: FONT_WEIGHT_500 },
  };
  const {
    visitors: { data },
  } = DASHBOARD_API;
  return (
    <>
      <Paragraph {...styledText}>{data}</Paragraph>
    </>
  );
};

export default VisitorCardBody;
