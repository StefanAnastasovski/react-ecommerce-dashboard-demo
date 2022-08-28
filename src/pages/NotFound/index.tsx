import React from "react";

import { Box } from "@mui/material";

import CardComponent from "../../components/ui/Card/Card";
import Paragraph from "../../components/Typography/Paragraph";

const NotFound = () => {
  return (
    <Box sx={{ flexGrow: 1, marginLeft: 3 }}>
      <CardComponent
        styleProps={{
          height: "auto",
          otherStyle: { display: "flex", textAlign: "center" },
        }}
      >
        <Paragraph styleProps={{ fontSize: 70, paddingTop: "50px" }}>
          404
        </Paragraph>
        <Paragraph
          styleProps={{
            fontSize: 40,
            paddingTop: "20px",
            paddingBottom: "50px",
          }}
        >
          Page Not Found
        </Paragraph>
      </CardComponent>
    </Box>
  );
};

export default NotFound;
