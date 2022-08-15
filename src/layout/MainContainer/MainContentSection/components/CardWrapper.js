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
}) => {
  const { icon, title, hasDropdown } = headerDetails;
  const { text, href, hasIcon } = footerDetails;
  return (
    <GridItem sx={{ flexGrow: 1, width: "50%" }}>
      <CardComponent>
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
          
          <MainContentCardFooter text={text} href={href} hasIcon={hasIcon} />
        </Box>
      </CardComponent>
    </GridItem>
  );
};

export default CardWrapper;
