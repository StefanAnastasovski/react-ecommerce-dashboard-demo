import React from "react";
import { shallow } from "enzyme";

import TrustpilotBody from "../components/cards/TrustpilotBody";

describe("<TrustpilotBody />", () => {
  describe("render()", () => {
    it("Shallow rendering - MatchSnapshot", () => {
      const component = shallow(<TrustpilotBody />);
      expect(component).toMatchSnapshot();
    });
  });
});
