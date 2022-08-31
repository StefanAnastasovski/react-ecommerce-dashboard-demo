import React from "react";
import { shallow } from "enzyme";

import OrderCardBody from "../components/cards/OrderCardBody";

describe("<OrderCardBody />", () => {
  describe("render()", () => {
    it("Shallow rendering - MatchSnapshot", () => {
      const component = shallow(<OrderCardBody />);
      expect(component).toMatchSnapshot();
    });
  });
});
