import React from "react";

interface StyledIconButtonType {
  children?: React.ReactNode;
  styleProps?: React.CSSProperties;
  otherProps?: any;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export default StyledIconButtonType;
