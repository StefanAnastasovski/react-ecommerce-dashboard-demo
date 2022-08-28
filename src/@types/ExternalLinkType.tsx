import React from "react";

interface ExternalLinkType {
  children?: React.ReactNode | boolean;
  styleProps?: React.CSSProperties | undefined;
  href?: string | undefined;
  target?: string;
  text?: string | undefined;
  icon?: React.ReactNode | boolean;
}

export default ExternalLinkType;
