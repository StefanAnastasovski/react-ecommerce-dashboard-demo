import React from "react";

import { List, ListItem, Typography } from "@mui/material";

import CardComponent from "../../components/ui/Card/Card";
import Paragraph from "../../components/Typography/Paragraph";
import { Box } from "@mui/system";

const Orders = () => {
  return (
    <Box sx={{ flexGrow: 1, marginLeft: 3 }}>
      <CardComponent
        styleProps={{
          height: "auto",
          otherStyle: { textAlign: "center" },
        }}
      >
        <Paragraph styleProps={{ fontSize: 40, padding: "50px 0" }}>
          Orders Page
        </Paragraph>
        <List>
          <ListItem>Order #1</ListItem>
          <ListItem>Order #2</ListItem>
          <ListItem>Order #3</ListItem>
          <ListItem>Order #4</ListItem>
        </List>
      </CardComponent>
    </Box>
  );
};

export default Orders;
