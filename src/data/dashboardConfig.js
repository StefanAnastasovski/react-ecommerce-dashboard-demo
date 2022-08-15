import React from "react";

import EyeIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import OrderList from "@mui/icons-material/FormatListBulletedOutlined";

import { CARD_BACKGROUND_COLOR_ORANGE } from "./constants";
import APPSTORE_IMG from "../assets/images/app-store.png";
import GOOGLEPLAY_IMG from "../assets/images/google-play-store.png";
import MarketPlaceIcon from "../assets/icons/MarketplaceIcon";

import VisitorCardBody from "../layout/MainContainer/cards/VisitorCardBody";
import OrderCardBody from "../layout/MainContainer/cards/OrderCardBody";
import MobileCardBody from "../layout/MainContainer/cards/MobileCardBody";

export const WELCOME_SECTION_USERNAME = "Mario";

// cards
export const CARD_DROPDOWN_PERIOD = [
  {
    id: "vc1",
    content: "This month",
  },
  {
    id: "vc2",
    content: "This week",
  },
  {
    id: "vc3",
    content: "Today",
  },
  {
    id: "vc4",
    content: "Last month",
  },
];

export const CONFIGURE_YOUR_SHOP_CARD = {
  header: {
    icon: "icon",
    title: "Visitors",
    hasDropdown: false,
  },
  link: {
    text: "Complete the setup!",
    href: "/",
    hasIcon: true,
  },
};

export const TRUSTPILOT_CARD = {
  header: {
    icon: "icon",
    title: "Trustpilot",
    hasDropdown: false,
  },
  link: {
    text: "Write a review on Trustpilot",
    href: "/",
    hasIcon: true,
  },
};

export const INVITE_FRIEND_CARD = {
  header: {
    icon: "icon",
    title: "Invite friend",
    hasDropdown: false,
  },
  link: {
    text: "Start inviting friends!",
    href: "/",
    hasIcon: true,
  },
};

export const CUSTOMER_SUPPORT_CARD = {
  header: {
    icon: "icon",
    title: "Customer support",
    hasDropdown: false,
  },
  link: {
    text: "",
    href: "",
    hasIcon: false,
  },
};

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
      height: null,
    },
  },

  {
    id: "cd2",
    header: {
      icon: <OrderList />,
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
      height: null,
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
      content: <VisitorCardBody />,
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
];

export const DASHBOARD_API = {
  visitors: {
    data: 1824,
  },
  orders: {
    orders_received: 156,
    earnings: 1893.24,
  },
};
