import React from "react";
import { shallow } from "enzyme";

import CustomerSupportBody from "../components/cards/CustomerSupportBody";

describe("<CustomerSupportBody />", () => {
  describe("render()", () => {
    it("Shallow rendering - MatchSnapshot", () => {
      const component = shallow(<CustomerSupportBody />);
      expect(component).toMatchSnapshot();
    });
  });
});
