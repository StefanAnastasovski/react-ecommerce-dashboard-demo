import React from "react";

import { List, ListItem, Typography } from "@mui/material";

import CardComponent from "../../components/ui/Card/Card";

const Orders = () => {
  return (
    <CardComponent sx={{ flexGrow: 1, textAlign: "center" }}>
      <Typography varient="h1" sx={{ fontSize: 40, padding: "50px 0" }}>
        Orders Page
      </Typography>
      <List>
        <ListItem>Order #1</ListItem>
        <ListItem>Order #2</ListItem>
        <ListItem>Order #3</ListItem>
        <ListItem>Order #4</ListItem>
      </List>
    </CardComponent>
  );
};

export default Orders;
