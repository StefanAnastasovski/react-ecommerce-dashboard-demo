import React from "react";

import Card from "@mui/material/Card";

import { WHITE_COLOR } from "../../../data/constants";

const CardComponent = ({ children, backgroundColor, height }) => {
  const cardStyle = {
    sx: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      background: backgroundColor || WHITE_COLOR,
      boxShadow:
        "0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06)",
      borderRadius: "10px",
      minWidth: "349px",
      height: height || "220px",
      padding: "24px",
    },
  };

  return <Card {...cardStyle}>{children}</Card>;
};

export default CardComponent;