import React from "react";

interface ContentCardHeaderType {
  icon?: React.ReactNode | boolean | null;
  title?: string | undefined;
  hasDropdown?: boolean | null;
  hasRightElement?: boolean | null;
  rightCardHeaderElement?: React.ReactNode | boolean | null;
  styleProps:
    | {
        fontSize?: string | undefined;
        fontWeight?: string | undefined;
        paddingLeft?: string | number | undefined;
        otherProps?: React.CSSProperties | any;
      }
    | React.CSSProperties;
}

export default ContentCardHeaderType;
