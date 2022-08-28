import React from "react";

interface ImageType {
  children?: React.ReactNode;
  component?: string;
  source?: string;
  alt?: string | undefined;
  width?: string | undefined;
  height?: string | undefined;
  otherProps?: any;
  styleProps?: React.CSSProperties;
}

export default ImageType;
