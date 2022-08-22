import React from "react";

import { CardMedia } from "@mui/material";

const Image = ({ source, alt, width, height, ...otherProps }) => {
  return (
    <CardMedia
      component="img"
      src={source}
      title={alt}
      sx={{ width: width || "unset", height: height || "unset" }}
      {...otherProps}
    />
  );
};

export default Image;
