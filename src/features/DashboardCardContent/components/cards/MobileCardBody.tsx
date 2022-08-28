import React from "react";

import ArrowRight from "@mui/icons-material/ArrowForwardOutlined";

import {
  CARD_TITLE_FONT_SIZE_2,
  FONT_WEIGHT_500,
  LINE_HEIGHT_MOBILE_CARD,
  LINK_N_TEXT_FONT_SIZE,
  WHITE_COLOR,
} from "../../../../data/constants";
import DEVICE_IMG from "../../../../assets/images/device.png";

import Paragraph from "../../../../components/Typography/Paragraph";
import GridItem from "../../../../components/Grid/GridItem";
import Image from "../../../../components/Image";
import ExternalLink from "../../../../components/ExternalLink";
import GridContainer from "../../../../components/Grid/GridContainer";
import MobileCardBodyType from "../../../../@types/MobileCardBodyType";

const MobileCardBody = ({
  body: { title, linkContent, href, hasIcon },
  footer: footerIcons,
}: MobileCardBodyType) => {
  const linkIcon = <ArrowRight sx={{ marginLeft: 2.5, fill: WHITE_COLOR }} />;

  const styledParagraph = {
    fontSize: CARD_TITLE_FONT_SIZE_2,
    fontWeight: FONT_WEIGHT_500,
    color: WHITE_COLOR,
    lineHeight: LINE_HEIGHT_MOBILE_CARD,
  };
  const styledExternalLink = {
    color: WHITE_COLOR,
    textDecorationColor: WHITE_COLOR,
  };
  const styledTopLink = {
    marginTop: 2,
    fontSize: LINK_N_TEXT_FONT_SIZE,
  };

  const footerContent =
    footerIcons &&
    footerIcons.map((icon: any) => {
      const { id, href, source, alt } = icon;
      return (
        <GridItem key={id} styleProps={{ alignSelf: "end" }}>
          <ExternalLink
            href={href}
            target="_blank"
            styleProps={styledExternalLink}
          >
            <Image source={source} alt={alt} />
          </ExternalLink>
        </GridItem>
      );
    });

  return (
    <GridContainer spacing="3.65" styleProps={{height: "100%"}}>
      <GridItem styleProps={{ display: "flex", gap: 3 }}>
        <GridItem>
          <Paragraph styleProps={styledParagraph}>{title}</Paragraph>
          <ExternalLink
            href={href}
            target="_blank"
            text={linkContent}
            icon={hasIcon && linkIcon}
            styleProps={{ ...styledExternalLink, ...styledTopLink }}
          />
        </GridItem>
        <GridItem>
          <Image width="105px" source={DEVICE_IMG} alt="device image" />
        </GridItem>
      </GridItem>

      <GridItem
        styleProps={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-between",
        }}
      >
        {footerContent}
      </GridItem>
    </GridContainer>
  );
};

export default MobileCardBody;
