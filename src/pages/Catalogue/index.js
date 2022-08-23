import React from "react";

import { Box, Button, Link, Typography } from "@mui/material";

import CardComponent from "../../components/ui/Card/Card";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import { Link as RouterLink } from "react-router-dom";
import { primaryMenuItems } from "../../features/Drawer/data/sidebarData";
import { PRIMARY_BACKGROUND_COLOR_ACTIVE } from "../../data/constants";

const Catalogue = () => {
  let catalogueBaseUrl = "";
  const catalogueItem = primaryMenuItems.filter((item) => {
    const { link, title, subtitles } = item;
    if (title !== "Catalogue") {
      return;
    }
    if (catalogueBaseUrl === "") {
      catalogueBaseUrl = link;
    }
    return subtitles;
  });
  let catalogueItems = [];
  if (catalogueItem) {
    catalogueItems = catalogueItem[0].subtitles;
  }

  const catalogueList = catalogueItems.map((item) => {
    const { subtitleId, subtitle, link } = item;
    return (
      <GridItem key={subtitleId} xs={6}>
        <Link
          component={RouterLink}
          to={`${catalogueBaseUrl}${link}`}
          sx={{ textDecoration: "none", color: "ffffff !important" }}
        >
          <Button variant="outlined" sx={{ width: 1 }}>
            {subtitle}
          </Button>
        </Link>
      </GridItem>
    );
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CardComponent
        sx={{
          textAlign: "center",
          background: PRIMARY_BACKGROUND_COLOR_ACTIVE,
        }}
      >
        <Typography varient="h1" sx={{ fontSize: 40, padding: "50px 0" }}>
          Catalogue Page
        </Typography>
      </CardComponent>
      <Box sx={{ display: "flex", margin: "30px 0" }}>
        <CardComponent sx={{ flexGrow: 1, padding: "30px" }}>
          <GridContainer spacing={3}>{catalogueList}</GridContainer>
        </CardComponent>
      </Box>
    </Box>
  );
};

export default Catalogue;
