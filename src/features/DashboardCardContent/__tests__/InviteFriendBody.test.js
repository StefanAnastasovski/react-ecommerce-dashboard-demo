import React from "react";
import { shallow } from "enzyme";

import InviteFriendBody from "../components/cards/InviteFriendBody";
import Paragraph from "../../../components/Typography/Paragraph";
import { Box } from "@mui/material";
import {
  FONT_WEIGHT_700,
  LINK_N_TEXT_FONT_SIZE,
  PRIMARY_GREEN_COLOR_ACTIVE,
} from "../../../data/constants";

const styledCompleted = {
  fontSize: LINK_N_TEXT_FONT_SIZE,
};

const highlightedText = {
  color: PRIMARY_GREEN_COLOR_ACTIVE,
  fontSize: LINK_N_TEXT_FONT_SIZE,
  fontWeight: FONT_WEIGHT_700,
};

describe("<InviteFriendBody />", () => {
  describe("render()", () => {
    it("Shallow rendering - MatchSnapshot", () => {
      const component = shallow(<InviteFriendBody />);
      expect(component).toMatchSnapshot();
    });

    it("Shallow rendering - contains", () => {
      const component = shallow(<InviteFriendBody />);
      expect(
        component.containsMatchingElement(
          <Paragraph styleProps={{ ...styledCompleted, padding: "1em 0" }}>
            <Box component="span" {...highlightedText} pr={0.5}>
              Receive 50 products
            </Box>
            by inviting a friend who subscribes to a plan. Your friend will
            receive a 30% discount coupon valid for any plan.
          </Paragraph>
        )
      ).toBeTruthy();
    });
  });
});
