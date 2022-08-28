import React from "react";

import { CardMedia } from "@mui/material";
import ImageType from "../@types/ImageType";

const Image = ({ source, alt, width, height, styleProps, otherProps }: ImageType) => {
  return (
    <CardMedia
      component="img"
      src={source}
      title={alt}
      sx={{ width: width || "unset", height: height || "unset", ...styleProps }}
      {...otherProps}
    />
  );
};

export default Image;
