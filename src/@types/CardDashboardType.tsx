import React from "react";

interface CardDashboardType {
  headerDetails: any;
  bodyDetails: { content: string | JSX.Element | undefined };
  footerDetails: any;
  style: {
    backgroundColor?: string | undefined;
    height?: string | undefined;
    width?: string | undefined;
    otherStyle?: React.CSSProperties;
  };
  isLastCard?: boolean | undefined;
}

export default CardDashboardType;
