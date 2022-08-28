import React from "react";

import { IconButton } from "@mui/material";
import styled from "@emotion/styled";

import { PRIMARY_COLOR_ACTIVE } from "../../../data/constants";
import StyledIconButtonType from "../../../@types/StyledIconButtonType";

const StyledIconButton = ({
  children,
  styleProps,
  onClick,
  otherProps,
}: StyledIconButtonType) => {
  const StyledIconButton = styled(IconButton)(() => ({
    ...styleProps,
    "&:hover svg": {
      fill: PRIMARY_COLOR_ACTIVE,
    },
  }));

  return (
    <StyledIconButton onClick={onClick} {...otherProps}>
      {children}
    </StyledIconButton>
  );
};

export default StyledIconButton;
