import React from "react";
import { shallow } from "enzyme";

import VisitorCardBody from "../components/cards/VisitorCardBody";

describe("<VisitorCardBody />", () => {
  describe("render()", () => {
    it.skip("Shallow rendering - MatchSnapshot", () => {
      const component = shallow(<VisitorCardBody />);
      expect(component).toMatchSnapshot();
    });
  });
});
