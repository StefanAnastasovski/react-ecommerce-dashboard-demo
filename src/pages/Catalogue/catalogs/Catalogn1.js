import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { Box, Link, Typography } from "@mui/material";

import {
  PRIMARY_COLOR_ACTIVE,
  PRIMARY_COLOR_TEXT,
} from "../../../data/constants";

import CardComponent from "../../../components/ui/Card/Card";

const Catalogn1 = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CardComponent sx={{ textAlign: "center" }}>
        <Typography varient="h1" sx={{ fontSize: 40, padding: "50px 0" }}>
          Catalog N1
        </Typography>
        <Box sx={{ marginBottom: "50px" }}>
          <Link
            component={RouterLink}
            to="/catalogue"
            sx={{
              border: 1,
              borderRadius: "10px",
              padding: "10px 50px",
              color: PRIMARY_COLOR_TEXT,
              textDecoration: "none",
              "&:hover": {
                color: PRIMARY_COLOR_ACTIVE,
              },
            }}
          >
            Go Back Catalogue Page
          </Link>
        </Box>
      </CardComponent>
    </Box>
  );
};

export default Catalogn1;
