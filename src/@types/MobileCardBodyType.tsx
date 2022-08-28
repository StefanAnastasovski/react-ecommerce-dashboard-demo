import React from "react";

interface MobileCardBodyType {
  body: {
    title?: string;
    linkContent?: string;
    href?: string;
    hasIcon?: boolean | undefined;
  };
  footer: any;
}

export default MobileCardBodyType;
