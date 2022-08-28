import React from "react";

interface CardDashboardFooterType {
  children: React.ReactNode;
  text?: string | undefined;
  href?: string | undefined;
  hasIcon?: boolean | null;
  color?: string | undefined;
  styleProps?: React.CSSProperties | undefined;
}

export default CardDashboardFooterType;
