import React from "react";

import Paragraph from "../../../components/Typography/Paragraph";
import {
  FONT_WEIGHT_300,
  FONT_WEIGHT_500,
  HEADER_BUTTON_FONT_SIZE,
  LINE_HEIGHT_POST_CARD_BODY,
  LINE_HEIGHT_POST_CARD_FOOTER,
  LINE_HEIGHT_POST_CARD_TITLE,
  POST_CARD_FOOTER_FONT_SIZE,
  POST_CARD_TITLE_FONT_SIZE,
  PRIMARY_COLOR_ACTIVE,
  PRIMARY_COLOR_TEXT,
} from "../../../data/constants";
import { getDateFromString } from "../../../utils/getDateFromString";

import ExternalLink from "../../../components/ExternalLink";
import GridItem from "../../../components/Grid/GridItem";
import Image from "../../../components/Image";
import CardWrapper from "../../../layout/MainContainer/CardContent/components/CardWrapper";
import { formatAuthorText } from "../utils/formatAuthorText";
import { formatTitleText } from "../utils/formatTitleText";

const Post = ({ postDetails, direction, ...otherProps }) => {
  const { author, title, urlToImage, url, source, publishedAt } =
    postDetails || {};

  const formatedAuthor = formatAuthorText(author) || source;
  const formatedTitle = formatTitleText(title);

  const footerText = (
    <Paragraph
        fontSize= {POST_CARD_FOOTER_FONT_SIZE}
        fontWeight={ FONT_WEIGHT_300}
        lineHeight= {LINE_HEIGHT_POST_CARD_FOOTER}
        color= {PRIMARY_COLOR_TEXT}
        textDecoration = {"underline"}
    >
      {`${formatedAuthor} | ${getDateFromString(publishedAt)}`}
    </Paragraph>
  );

  const cardWrapperStyle = {
    height: "100px",
    minWidth: "100%",
    boxShadow: "none",
    padding: "5px 18px 5px 16px ",
    flexGrow: 1,
  };

  const headerStyle = {
    style: {
      fontSize: POST_CARD_TITLE_FONT_SIZE,
      fontWeight: FONT_WEIGHT_500,
      color: PRIMARY_COLOR_ACTIVE,
      lineHeight: LINE_HEIGHT_POST_CARD_TITLE,
      textTransform: "Uppercase",
      padding: 0,
    },
  };

  const body = {
    content: (
      <Paragraph
        sx={{
          fontSize: HEADER_BUTTON_FONT_SIZE,
          fontWeight: FONT_WEIGHT_500,
          lineHeight: LINE_HEIGHT_POST_CARD_BODY,
          maxHeight: "50px",
        }}
      >
        {formatedTitle}
      </Paragraph>
    ),
  };

  const footerStyle = {
    style: {
      fontSize: POST_CARD_FOOTER_FONT_SIZE,
      fontWeight: FONT_WEIGHT_300,
      lineHeight: LINE_HEIGHT_POST_CARD_FOOTER,
      color: PRIMARY_COLOR_TEXT,
    },
  };

  return (
    <GridItem sx={{ display: "flex" }} xs={6}>
      <ExternalLink href={url} styleProps={{ textDecoration: "none" }}>
        {/* post left side - img */}
        <Image
          source={urlToImage}
          alt={title}
          width={"100px"}
          height={"100px"}
        />
        {/* post right side - content */}
        <CardWrapper
          headerDetails={{
            title: source,
            ...headerStyle,
          }}
          bodyDetails={body}
          footerDetails={{
            children: footerText,
            ...footerStyle,
          }}
          style={cardWrapperStyle}
          isLastCard={true}
        />
      </ExternalLink>
    </GridItem>
  );
};

export default Post;
