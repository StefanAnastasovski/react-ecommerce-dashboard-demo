import React from "react";

import { Link } from "@mui/material";

const ExternalLink = ({
  children,
  text,
  icon,
  href,
  styleProps,
  ...otherProps
}) => {
  console.log(otherProps);
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
      color: color && color,
      textDecorationColor: textDecorationColor && textDecorationColor,
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
