import React from "react";

import { IconButton } from "@mui/material";
import styled from "@emotion/styled";

import { PRIMARY_COLOR_ACTIVE } from "../../../data/constants";

const StyledIconButton = ({
  children,
  styleProps,
  ...otherProps
}) => {
  const StyledIconButton = styled(IconButton)(() => ({
    ...styleProps,
    "&:hover svg": {
      fill: PRIMARY_COLOR_ACTIVE,
    },
  }));

  return <StyledIconButton {...otherProps}>{children}</StyledIconButton>;
};

export default StyledIconButton;
