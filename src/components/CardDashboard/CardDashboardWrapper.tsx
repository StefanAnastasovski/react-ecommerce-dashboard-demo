import React from "react";

import { Box } from "@mui/material";

import CardDashboardType from "../../@types/CardDashboardType";

import GridItem from "../Grid/GridItem";
import CardComponent from "../ui/Card/Card";
import CardDashboardHeader from "./CardDashboardHeader";
import CardDashboardFooter from "./CardDashboardFooter";
import CardDashboardBody from "./CardDashboardBody";

const CardDashboardWrapper = ({
  headerDetails,
  bodyDetails: { content },
  footerDetails,
  style: { backgroundColor, height, width, ...otherStyle },
  isLastCard,
}: CardDashboardType) => {
  const { title, headerStyle } = headerDetails;
  const { text, href, hasIcon, style: footerStyle, children } = footerDetails;
  const headerStypeProps = headerStyle && headerStyle.headerStyle;
  const defaultCard = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flexGrow: 1,
      }}
    >
      <CardDashboardHeader
        {...headerDetails}
        styleProps={{
          // fontSize: null,
          // fontWeight: null,
          ...headerStypeProps,
        }}
      />
      <CardDashboardBody>{content}</CardDashboardBody>

      <CardDashboardFooter
        text={text}
        href={href}
        hasIcon={hasIcon}
        color={(footerStyle && footerStyle.color) || ""}
        styleProps={footerStyle}
        children={children && children}
      />
    </Box>
  );

  return (
    <GridItem
      styleProps={{ flexGrow: 1, maxWidth: "100%" }}
      lg={!isLastCard && 6}
      xs={12}
    >
      <CardComponent
        styleProps={{
          backgroundColor: `${backgroundColor}`,
          height: `${height}`,
          otherStyle: { ...otherStyle, minWidth: `${width}` },
        }}
      >
        {title !== "" || text !== "" ? defaultCard : content}
      </CardComponent>
    </GridItem>
  );
};

export default CardDashboardWrapper;
