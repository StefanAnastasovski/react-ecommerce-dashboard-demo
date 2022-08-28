import React from "react";
import Slick from "react-slick";

import { Box, Skeleton } from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderItem from "./components/SliderItem";
import SliderItemType from "../../@types/SliderItemType";

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  variableWidth: true,
};

const CustomSlider = ({ data }: { data: any }) => {
  const sliderStyle = {
    sx: {
      minWidth: "100%",
      width: "152px",
    },
  };
  const skeletonStyle = {
    sx: {
      marginBottom: "24px",
      width: "150px",
      height: "150px",
      borderRadius: "10px",
      marginRight: "50px",
    },
  };
  return (
    <Box {...sliderStyle}>
      <Slick {...settings}>
        {data
          ? data.map(({ id, img_url, description, name }: SliderItemType) => (
              <SliderItem
                key={id}
                source={img_url}
                alt={description}
                name={name}
                description={description}
              />
            ))
          : [1, 2, 3, 4].map((item) => (
              <Box key={`id-skeleton-${item}`}>
                <Skeleton variant="rectangular" {...skeletonStyle} />
                <Skeleton variant="text" sx={{ marginRight: "50px" }} />
              </Box>
            ))}
      </Slick>
    </Box>
  );
};

export default CustomSlider;
