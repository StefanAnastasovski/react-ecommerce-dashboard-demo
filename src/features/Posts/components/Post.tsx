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
import { formatAuthorText } from "../utils/formatAuthorText";
import { formatTitleText } from "../utils/formatTitleText";
import CardDashboardWrapper from "../../../components/CardDashboard/CardDashboardWrapper";
import PostType from "../../../@types/PostType";

const Post = ({ postDetails }: PostType) => {
  const { author, title, urlToImage, url, source, publishedAt } = postDetails;

  const formatedAuthor = formatAuthorText(author) || source;
  const formatedTitle = formatTitleText(title);
  const publishedAtDate = getDateFromString(publishedAt || "");

  const footerText = (
    <Paragraph
      styleProps={{
        fontSize: POST_CARD_FOOTER_FONT_SIZE,
        fontWeight: FONT_WEIGHT_300,
        lineHeight: LINE_HEIGHT_POST_CARD_FOOTER,
        color: PRIMARY_COLOR_TEXT,
        textDecoration: "underline",
      }}
    >
      {`${formatedAuthor} | ${publishedAtDate}`}
    </Paragraph>
  );

  const cardDashboardWrapperStyle = {
    height: "100px",
    width: "unset",
    minWidth: "100%",
    boxShadow: "none",
    padding: "5px 18px 5px 16px ",
    flexGrow: 1,
  };

  const headerStyle = {
    fontSize: POST_CARD_TITLE_FONT_SIZE,
    fontWeight: FONT_WEIGHT_500,
    paddingLeft: 0,
    color: PRIMARY_COLOR_ACTIVE,
    lineHeight: LINE_HEIGHT_POST_CARD_TITLE,
    textTransform: "Uppercase",
  };

  const body = {
    content: (
      <Paragraph
        styleProps={{
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
      textDecoration: "underline",
    },
  };

  return (
    <GridItem styleProps={{ display: "flex" }} lg={6} xs={12}>
      <ExternalLink href={url} styleProps={{ textDecoration: "none" }}>
        {/* post left side - img */}
        <Image
          source={urlToImage}
          alt={title}
          width={"100px"}
          height={"100px"}
        />
        {/* post right side - content */}
        <CardDashboardWrapper
          headerDetails={{
            title: source,
            headerStyle: { headerStyle },
          }}
          bodyDetails={body}
          footerDetails={{
            children: footerText,
            ...footerStyle,
          }}
          style={cardDashboardWrapperStyle}
          isLastCard={true}
        />
      </ExternalLink>
    </GridItem>
  );
};

export default Post;
