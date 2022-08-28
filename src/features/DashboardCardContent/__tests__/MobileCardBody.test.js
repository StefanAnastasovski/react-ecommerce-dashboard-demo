import React from "react";
import { shallow } from "enzyme";

import APPSTORE_IMG from "../../../assets/images/app-store.png";
import GOOGLEPLAY_IMG from "../../../assets/images/google-play-store.png";
import MobileCardBody from "../components/cards/MobileCardBody";
import Paragraph from "../../../components/Typography/Paragraph";

const props = {
  body: {
    title: "Sell your products on your exclusive APP published on the stores",
    linkContent: "Show More",
    href: "https://www.apple.com/app-store/",
    hasIcon: true,
  },
  footer: [
    {
      id: "stimg1",
      source: APPSTORE_IMG,
      alt: "App Store",
      href: "https://apple.com",
    },
    {
      id: "stimg2",
      source: GOOGLEPLAY_IMG,
      alt: "Google Play Store",
      href: "https://google.com",
    },
  ],
};

describe("SomeComponent component", () => {
  it.skip("Shallow rendering - MatchSnapshot", () => {
    const component = shallow(<MobileCardBody {...props} />);
    expect(component).toMatchSnapshot();
  });

  it.skip("Shallow rendering - match content", () => {
    const component = shallow(<MobileCardBody />);
    expect(component.find(<Paragraph children={props.body.title} />));
  });

  // it("Configure your shop card render testing", () => {
  //   render(<MobileCardBody />);
  //   const element = screen.getByText("Show More");
  //   expect(element).toBeInTheDocument();
  // });
});
