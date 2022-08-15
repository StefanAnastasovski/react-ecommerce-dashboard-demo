import React from "react";

import { Link } from "@mui/material";

const ExternalLink = ({ children, text, icon, ...otherProps }) => {
  const content = !children ? (
    <>
      {text}
      {icon && icon}
    </>
  ) : (
    children
  );
  return <Link {...otherProps}>{content}</Link>;
};

export default ExternalLink;
