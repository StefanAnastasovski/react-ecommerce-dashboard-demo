import React from "react";
import { shallow } from "enzyme";

import OrderCardBody from "../components/cards/OrderCardBody";

describe("<OrderCardBody />", () => {
  describe("render()", () => {
    it.skip("Shallow rendering - MatchSnapshot", () => {
      const component = shallow(<OrderCardBody />);
      expect(component).toMatchSnapshot();
    });
  });
});
