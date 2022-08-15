import React from "react";

import { Box, Link } from "@mui/material";
import ArrowRight from "@mui/icons-material/ArrowForwardOutlined";

import { PRIMARY_COLOR_ACTIVE } from "../../../../data/constants";

const MainContentCardFooter = ({text, href, hasIcon}) => {
  return (
    <Box>
      <Link href={href} target="_blank" sx={{ display: "flex" }}>
        {text}
        {hasIcon && (
          <ArrowRight sx={{ marginLeft: 2.5, fill: PRIMARY_COLOR_ACTIVE }} />
        )}
      </Link>
    </Box>
  );
};

export default MainContentCardFooter;
