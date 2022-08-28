import React from "react";

import { Link } from "@mui/material";

import { PRIMARY_COLOR_ACTIVE } from "../data/constants";
import ExternalLinkType from "../@types/ExternalLinkType";

const ExternalLink = ({
  children,
  text,
  icon,
  href,
  styleProps,
  ...otherProps
}: ExternalLinkType) => {
  const content = !children ? (
    <>
      {text}
      {icon && icon}
    </>
  ) : (
    children
  );

  const { color, fontSize, fontWeight, textDecorationColor, ...otherStyle } =
    styleProps || {};

  const styledLink = {
    sx: {
      display: "flex",
      fontSize: fontSize && fontSize,
      fontWeight: fontWeight && fontWeight,
      color: color ? color : PRIMARY_COLOR_ACTIVE,
      textDecorationColor: textDecorationColor
        ? textDecorationColor
        : PRIMARY_COLOR_ACTIVE,
      ...otherStyle,
    },
  };

  return (
    <Link href={href} {...styledLink} {...otherProps}>
      {content}
    </Link>
  );
};

export default ExternalLink;
