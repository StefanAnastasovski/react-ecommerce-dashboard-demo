import React from "react";

interface CardComponentType {
  children?: React.ReactNode | string;
  component?: string;
  styleProps?: {
    backgroundColor?: string;
    height?: string | undefined;
    width?: string | undefined;
    otherStyle?: any;
  };
  otherProps?: any;
}

export default CardComponentType;
