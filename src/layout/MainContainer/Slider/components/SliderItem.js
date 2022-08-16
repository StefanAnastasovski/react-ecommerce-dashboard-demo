import React from "react";

import { Avatar } from "@mui/material";
import { Box } from "@mui/system";

import { LINK_N_TEXT_FONT_SIZE } from "../../../../data/constants";

import Paragraph from "../../../../components/Typography/Paragraph";

const SliderItem = ({ name, description, source }) => {
  const sliderItemStyle = {
    sx: {
      width: "152px",
      marginRight: "50px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  };

  const avatarStyle = {
    sx: {
      borderRadius: "10px",
      width: "150px",
      height: "150px",
      marginBottom: "12px",
    },
  };
  return (
    <Box {...sliderItemStyle}>
      <Avatar src={source} {...avatarStyle} />
      <Paragraph sx={{ fontSize: LINK_N_TEXT_FONT_SIZE }}>
        {description}
      </Paragraph>
    </Box>
  );
};

export default SliderItem;
