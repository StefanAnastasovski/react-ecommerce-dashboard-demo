import React from "react";
import { shallow } from "enzyme";
import DrawerPrimaryMenu from "../components/DrawerPrimaryMenu";
import DrawerSecondaryMenu from "../components/DrawerSecondaryMenu";

describe("Header - <DrawerPrimaryMenu />", () => {
  describe("render()", () => {
    it("Shallow rendering - Primary Menu exist:", () => {
      console.log("Primary Menu exist:");
      const component = shallow(<DrawerPrimaryMenu />);
      expect(component.find("#primary-menu").length).toEqual(1);
    });

    it("Shallow rendering ", () => {
      console.log("Primary Menu children:");
      const component = shallow(<DrawerPrimaryMenu />);
      expect(component.children()).toHaveLength(13);
    });
  });
});

describe("Header - <DrawerSecondaryMenu />", () => {
  describe("render()", () => {
    it("Shallow rendering - Primary Menu exist:", () => {
      console.log("Secondary Menu exist:");
      const component = shallow(<DrawerSecondaryMenu />);
      expect(component.find("#secondary-menu").length).toEqual(1);
    });
    it("Shallow rendering - children:", () => {
      console.log("Secondary Menu children:");
      const component = shallow(<DrawerSecondaryMenu />);
      // secondary menu has 3 children
      expect(component.children()).toHaveLength(3);
    });
  });
});
