import React from "react";

import ArrowRight from "@mui/icons-material/ArrowForwardOutlined";

import {
  CARD_TITLE_FONT_SIZE_2,
  FONT_WEIGHT_500,
  LINK_N_TEXT_FONT_SIZE,
  WHITE_COLOR,
} from "../../../data/constants";
import DEVICE_IMG from "../../../assets/images/device.png";

import Paragraph from "../../../components/Typography/Paragraph";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Image from "../../../components/Image";
import ExternalLink from "../../../components/ExternalLink";

const MobileCardBody = ({
  body: { title, linkContent, href, hasIcon },
  footer: footerIcons,
}) => {
  const linkIcon = <ArrowRight sx={{ marginLeft: 2.5, fill: WHITE_COLOR }} />;

  const styledParagraph = {
    sx: {
      fontSize: CARD_TITLE_FONT_SIZE_2,
      fontWeight: FONT_WEIGHT_500,
      color: WHITE_COLOR,
    },
  };
  const styledExternalLink = {
    sx: {
      display: "flex",
      color: WHITE_COLOR,
      textDecorationColor: WHITE_COLOR,
    },
  };
  const styledTopLink = {
    marginTop: 2,
    fontSize: LINK_N_TEXT_FONT_SIZE,
  };

  const footerContent =
    footerIcons &&
    footerIcons.map((icon) => {
      const { id, href, source, alt } = icon;
      return (
        <GridItem key={id}>
          <ExternalLink href={href} target="_blank" {...styledExternalLink}>
            <Image source={source} alt={alt} />
          </ExternalLink>
        </GridItem>
      );
    });

  return (
    <GridContainer spacing={3.65}>
      <GridItem sx={{ display: "flex", gap: 3 }}>
        <GridItem>
          <Paragraph {...styledParagraph}>{title}</Paragraph>
          <ExternalLink
            href={href}
            target="_blank"
            text={linkContent}
            icon={hasIcon && linkIcon}
            {...{ ...styledExternalLink, ...styledTopLink }}
          />
        </GridItem>
        <GridItem>
          <Image source={DEVICE_IMG} alt="device image" />
        </GridItem>
      </GridItem>

      <GridItem
        sx={{ display: "flex", flexGrow: 1, justifyContent: "space-between" }}
      >
        {footerContent}
      </GridItem>
    </GridContainer>
  );
};

export default MobileCardBody;
