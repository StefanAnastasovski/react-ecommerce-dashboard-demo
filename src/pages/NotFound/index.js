import React from "react";

import { Typography } from "@mui/material";

import CardComponent from "../../components/ui/Card/Card";

const NotFound = () => {
  return (
    <CardComponent sx={{ flexGrow: 1, textAlign: "center" }}>
      <Typography varient="h1" sx={{ fontSize: 70, paddingTop: "50px" }}>
        404
      </Typography>
      <Typography varient="h1" sx={{ fontSize: 40, paddingTop: "20px", paddingBottom: "50px" }}>
        Page Not Found
      </Typography>
    </CardComponent>
  );
};

export default NotFound;
