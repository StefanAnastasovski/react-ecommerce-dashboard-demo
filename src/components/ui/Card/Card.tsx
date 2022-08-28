import React from "react";

import Card from "@mui/material/Card";

import { WHITE_COLOR } from "../../../data/constants";
import CardComponentType from "../../../@types/CardComponentType";

const CardComponent = ({
  children,
  styleProps,
  otherProps,
}: CardComponentType) => {
  const { backgroundColor, height, ...otherStyle } = styleProps || {};
  const styledCard = {
    sx: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      background: backgroundColor || WHITE_COLOR,
      boxShadow:
        "0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06)",
      borderRadius: "10px",
      minWidth: "349px",
      height: height !== null ? height : "220px",
      minHeight: "100%",
      padding: "24px",
      ...otherStyle.otherStyle,
    },
  };

  return (
    <Card {...styledCard} {...otherProps}>
      {children}
    </Card>
  );
};

export default CardComponent;
