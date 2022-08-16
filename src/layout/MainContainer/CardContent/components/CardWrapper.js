import React from "react";

import { Box } from "@mui/material";

import GridItem from "../../../../components/Grid/GridItem";
import CardComponent from "../../../../components/ui/Card/Card";
import MainContentCardHeader from "./MainContentCardHeader";
import MainContentCardFooter from "./MainContentCardFooter";
import MainContentCardBody from "./MainContentCardBody";

const CardWrapper = ({
  headerDetails,
  bodyDetails: { content },
  footerDetails,
  style: { backgroundColor, height, width },
}) => {
  const { icon, title, hasDropdown } = headerDetails;
  const { text, href, hasIcon, style } = footerDetails;

  const defaultCard = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flexGrow: 1,
      }}
    >
      <MainContentCardHeader
        icon={icon}
        title={title}
        hasDropdown={hasDropdown}
      />
      <MainContentCardBody>{content}</MainContentCardBody>

      <MainContentCardFooter
        text={text}
        href={href}
        hasIcon={hasIcon}
        color={(style && style.color) || ""}
      />
    </Box>
  );

  return (
    <GridItem sx={{ flexGrow: 1 }} lg={6} xs={12}>
      <CardComponent
        backgroundColor={backgroundColor || null}
        height={height || null}
      >
        {title !== "" && text !== "" ? defaultCard : content}
      </CardComponent>
    </GridItem>
  );
};

export default CardWrapper;
