import React from "react";

import { Box } from "@mui/material";

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
}) => {
  const { title } = headerDetails;
  const { text, href, hasIcon, style: footerStyle, children } = footerDetails;
  const defaultCard = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flexGrow: 1,
      }}
    >
      <CardDashboardHeader {...headerDetails} />
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
      sx={{ flexGrow: 1, maxWidth: "100%" }}
      lg={!isLastCard && 6}
      xs={12}
    >
      <CardComponent
        backgroundColor={backgroundColor || null}
        height={height || null}
        otherStyle={otherStyle || null}
      >
        {title !== "" || text !== "" ? defaultCard : content}
      </CardComponent>
    </GridItem>
  );
};

export default CardDashboardWrapper;
