import React from "react";

import EyeIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import OrderListIcon from "@mui/icons-material/FormatListBulletedOutlined";
import HeadphonesIcon from "@mui/icons-material/HeadphonesOutlined";
import NewsIcon from "@mui/icons-material/DescriptionOutlined";

import {
  CARD_BACKGROUND_COLOR_ORANGE,
  PRIMARY_GREEN_COLOR_ACTIVE,
  TRUSTPILOT_BACKGROUND_COLOR,
} from "./constants";
import APPSTORE_IMG from "../assets/images/app-store.png";
import GOOGLEPLAY_IMG from "../assets/images/google-play-store.png";
import MarketPlaceIcon from "../assets/icons/MarketplaceIcon";
import TrustpilotIcon from "../assets/icons/TrustpilotIcon";
import UsersIcon from "../assets/icons/UsersIcon";
import ConfigureIcon from "../assets/icons/ConfigureIcon";

import VisitorCardBody from "../features/DashboardCardContent/components/cards/VisitorCardBody";
import OrderCardBody from "../features/DashboardCardContent/components/cards/OrderCardBody";
import MobileCardBody from "../features/DashboardCardContent/components/cards/MobileCardBody";
import ConfigureYourShopBody from "../features/DashboardCardContent/components/cards/ConfigureYourShopBody";
import TrustpilotBody from "../features/DashboardCardContent/components/cards/TrustpilotBody";
import InviteFriendBody from "../features/DashboardCardContent/components/cards/InviteFriendBody";
import CustomerSupportBody from "../features/DashboardCardContent/components/cards/CustomerSupportBody";
import LinkButton from "../components/ui/Button/LinkButton";
import CustomSlider from "../features/Slider";
import { extensions } from "./extensions";
import ExternalLink from "../components/ExternalLink";
import LaunchLinkIcon from "../assets/icons/LaunchLinkIcon";
import Posts from "../features/Posts";

export const WELCOME_SECTION_USERNAME = "Mario";

// cards
export const CARD_DROPDOWN_PERIOD = [
  {
    id: "vc1",
    title: "This month",
  },
  {
    id: "vc2",
    title: "This week",
  },
  {
    id: "vc3",
    title: "Today",
  },
  {
    id: "vc4",
    title: "Last month",
  },
];
// Post
export const CARD_DETAILS = [
  {
    id: "cd1",
    header: {
      icon: <EyeIcon />,
      title: "Visitors",
      hasDropdown: true,
    },
    body: {
      content: <VisitorCardBody />,
    },
    footer: {
      text: "Do you want more visits? Contact us!",
      href: "/",
      hasIcon: true,
    },
    style: {
      height: "220px",
    },
  },

  {
    id: "cd2",
    header: {
      icon: <OrderListIcon />,
      title: "Orders",
      hasDropdown: true,
    },
    body: {
      content: <OrderCardBody />,
    },
    footer: {
      text: "10 free tips to increase your sales",
      href: "/",
      hasIcon: false,
    },
    style: {
      height: "220px",
    },
  },
  {
    id: "cd3",
    header: {
      icon: "",
      title: "",
      hasDropdown: false,
    },
    body: {
      content: (
        <MobileCardBody
          body={{
            title:
              "Sell your products on your exclusive APP published on the stores",
            linkContent: "Show More",
            href: "https://www.apple.com/app-store/",
            hasIcon: true,
          }}
          footer={[
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
          ]}
        />
      ),
    },
    footer: {
      text: "",
      href: "/",
      hasIcon: true,
    },
    style: {
      height: "343px",
      backgroundColor: CARD_BACKGROUND_COLOR_ORANGE,
    },
  },
  {
    id: "cd4",
    header: {
      icon: <MarketPlaceIcon />,
      title: "Extensions Marketplace",
      hasDropdown: false,
    },
    body: {
      content: <CustomSlider data={extensions} />,
    },
    footer: {
      text: "Discover all extensions",
      href: "/",
      hasIcon: true,
    },
    style: {
      height: "343px",
    },
  },
  {
    id: "cd5",
    header: {
      icon: <NewsIcon />,
      title: "Latest news",
      hasDropdown: false,
      hasRightElement: true,
      rightCardHeaderElement: (
        <ExternalLink
          href={"https://newsapi.org/"}
          text={"Visit our blog"}
          icon={<LaunchLinkIcon styleProps={{}} />}
        />
      ),
    },
    body: {
      content: <Posts />,
    },
    footer: {
      text: "",
      href: "",
      hasIcon: false,
    },
    style: {
      height: "auto",
    },
  },
];

export const SIDEBAR_CARD_DETAILS = [
  {
    id: "sbcd1",
    header: {
      icon: <ConfigureIcon />,
      title: "Configure Your Shop",
      hasDropdown: false,
    },
    body: {
      content: <ConfigureYourShopBody />,
    },
    footer: {
      text: "Complete the setup!",
      href: "/",
      hasIcon: true,
      style: {},
    },
    style: {
      height: "auto",
    },
  },
  {
    id: "sbcd2",
    header: {
      icon: <TrustpilotIcon />,
      title: " ",
      hasDropdown: false,
    },
    body: {
      content: <TrustpilotBody />,
    },
    footer: {
      text: "Write a review on Trustpilot",
      href: "/",
      hasIcon: true,
      style: { color: PRIMARY_GREEN_COLOR_ACTIVE },
    },
    style: {
      height: "auto",
      backgroundColor: TRUSTPILOT_BACKGROUND_COLOR,
    },
  },
  {
    id: "sbcd3",
    header: {
      icon: <UsersIcon />,
      title: "Invite Friends",
      hasDropdown: false,
    },
    body: {
      content: <InviteFriendBody />,
    },
    footer: {
      text: "Start inviting friends!",
      href: "/",
      hasIcon: true,
      style: {},
    },
    style: {
      height: "auto",
    },
  },
  {
    id: "sbcd4",
    header: {
      icon: <HeadphonesIcon />,
      title: "Customer Support",
      hasDropdown: false,
    },
    body: {
      content: <CustomerSupportBody />,
    },
    footer: {
      text: <LinkButton children={"Contact Us"} component="span" />,
      href: "/",
      hasIcon: false,
      style: {},
    },
    style: {
      height: "auto",
    },
  },
];

export const DASHBOARD_API = {
  visitors: {
    data: 1824,
  },
  orders: {
    orders_received: 156,
    earnings: 1893.24,
  },
  configure_your_shop: {
    completed: 45,
  },
  cs_agent: {
    name: "Natalie",
  },
};
