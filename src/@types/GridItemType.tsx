import React from "react";

interface GridItemType {
  children?: React.ReactNode;
  otherProps?: any;
  xs?: number | string;
  lg?: boolean | number;
  styleProps?: React.CSSProperties;
}

export default GridItemType;
