import React from "react";

import { Box } from "@mui/material";

import { LINK_N_TEXT_FONT_SIZE } from "../../../../data/constants";
import AGENT_PIC from "../../../../assets/images/agent-profile-pic.jpeg";

import { DASHBOARD_API } from "../../../../data/dashboardConfig";

import Paragraph from "../../../../components/Typography/Paragraph";
import Image from "../../../../components/Image";

const CustomerSupportBody = () => {
  const {
    cs_agent: { name },
  } = DASHBOARD_API;

  const styledImage = {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
  };
  const agentImageDimensions = {
    sx: {
      width: "40px",
      height: "40px",
    },
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }} my={2}>
      <Box {...agentImageDimensions}>
        <Image
          source={AGENT_PIC}
          alt={`Agent ${name} profile pic`}
          styleProps={styledImage}
        />
      </Box>
      <Paragraph
        styleProps={{
          fontSize: `${LINK_N_TEXT_FONT_SIZE}`,
          margin: "1em 0",
          marginLeft: "1em",
        }}
      >
        {name} is here to help you.
      </Paragraph>
    </Box>
  );
};

export default CustomerSupportBody;
