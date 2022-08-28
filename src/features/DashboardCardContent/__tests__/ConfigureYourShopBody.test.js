import React from "react";
import { shallow } from "enzyme";
import { render } from "@testing-library/react";

import ConfigureYourShopBody from "../components/cards/ConfigureYourShopBody";

describe("<ConfigureYourShopBody />", () => {
  describe("render()", () => {
    it.skip("Shallow rendering - MatchSnapshot", () => {
      const component = shallow(<ConfigureYourShopBody />);
      expect(component).toMatchSnapshot();
    });
    test.skip("Configure your shop card render testing", () => {
      const { getByText } = render(<ConfigureYourShopBody />);
      expect(
        getByText("complete all the steps", { exact: false })
        // "Complete all the steps to have a complete shop to best present to your customers."
      ).toBeDefined();
      expect(getByText("Completed", { exact: true })).toBeDefined();
    });
  });
});
