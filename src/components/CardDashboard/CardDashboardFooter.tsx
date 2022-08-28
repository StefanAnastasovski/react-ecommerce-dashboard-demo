import React from "react";

import { Box } from "@mui/material";
import ArrowRight from "@mui/icons-material/ArrowForwardOutlined";

import { PRIMARY_COLOR_ACTIVE } from "../../data/constants";
import CardDashboardFooterType from "../../@types/CardDashboardFooterType";

import ExternalLink from "../ExternalLink";

const MainContentCardFooter = ({
  children,
  text,
  href,
  hasIcon,
  color,
  styleProps,
}: CardDashboardFooterType) => {
  const footerContent = !children ? (
    <ExternalLink
      href={href}
      target="_blank"
      styleProps={{
        color: color || PRIMARY_COLOR_ACTIVE,
        textDecorationColor: color || PRIMARY_COLOR_ACTIVE,
        ...styleProps,
      }}
      text={text}
      icon={
        hasIcon && (
          <ArrowRight
            sx={{ marginLeft: 2.5, fill: color || PRIMARY_COLOR_ACTIVE }}
          />
        )
      }
    />
  ) : (
    children
  );
  return <Box>{footerContent}</Box>;
};

export default MainContentCardFooter;
