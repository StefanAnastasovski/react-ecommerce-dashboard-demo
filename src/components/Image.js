import React from "react";

import { CardMedia } from "@mui/material";

const Image = ({ source, alt, width, ...otherProps }) => {
  return (
    <CardMedia
      component="img"
      src={source}
      title={alt}
      sx={{ width: width || "unset" }}
      {...otherProps}
    />
  );
};

export default Image;
