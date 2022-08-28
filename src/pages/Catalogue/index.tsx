import React from "react";

import { Box, Button, Link, Typography } from "@mui/material";

import CardComponent from "../../components/ui/Card/Card";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import { Link as RouterLink } from "react-router-dom";
import { primaryMenuItems } from "../../features/Drawer/data/sidebarData";
import { PRIMARY_BACKGROUND_COLOR_ACTIVE } from "../../data/constants";
import Paragraph from "../../components/Typography/Paragraph";

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
  let catalogueItems: any = [];
  if (catalogueItem) {
    catalogueItems = catalogueItem[0].subtitles;
  }

  const catalogueList = catalogueItems.map((item: any) => {
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
    <Box sx={{ flexGrow: 1, marginLeft: 3}}>
      <CardComponent
        styleProps={{
          backgroundColor: PRIMARY_BACKGROUND_COLOR_ACTIVE,
          otherStyle: {
            textAlign: "center",
            minHeight: "auto",
          },
        }}
      >
        <Paragraph styleProps={{ fontSize: 40, padding: "50px 0" }}>
          Catalogue Page
        </Paragraph>
      </CardComponent>
      <Box sx={{ display: "flex", margin: "30px 0" }}>
        <CardComponent
          styleProps={{ otherStyle: { flexGrow: 1, padding: "30px" } }}
        >
          <GridContainer spacing="3rem">{catalogueList}</GridContainer>
        </CardComponent>
      </Box>
    </Box>
  );
};

export default Catalogue;
