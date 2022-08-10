import React from "react";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import BrushIcon from "@mui/icons-material/Brush";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import ExtensionIcon from "@mui/icons-material/Extension";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ShareIcon from "@mui/icons-material/Share";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import TargetIcon from "../assets/icons/TargetIcon";

export const primaryMenuItems = [
  {
    id: "t1",
    title: "Dashboard",
    subtitles: [],
    link: "/",
    icon: <HomeOutlinedIcon />,
  },
  {
    id: "t2",
    title: "Catalogue",
    subtitles: [
      {
        subtitleId: "t2s1",
        subtitle: "Catalog N1",
        link: "/catalog-n1",
      },
      {
        subtitleId: "t2s2",
        subtitle: "Catalog N2",
        link: "/catalog-n2",
      },
      {
        subtitleId: "t2s3",
        subtitle: "Catalog N3",
        link: "/catalog-n3",
      },
    ],
    link: "/catalogue",
    icon: <ShoppingCartOutlinedIcon />,
  },
  {
    id: "t3",
    title: "Orders",
    subtitles: [],
    link: "/orders",
    icon: <FormatListBulletedOutlinedIcon />,
  },
  {
    id: "t4",
    title: "Customers",
    subtitles: [],
    link: "/customers",
    icon: <PersonOutlineOutlinedIcon />,
  },
  {
    id: "t5",
    title: "Marketing",
    subtitles: [
      {
        subtitleId: "t5s1",
        subtitle: "Discount codes",
        link: "/discount-codes",
      },
      {
        subtitleId: "t5s2",
        subtitle: "Exit intent",
        link: "/exit-intent",
      },
      {
        subtitleId: "t5s3",
        subtitle: "Checkout Features",
        link: "/checkout-features",
      },
      {
        subtitleId: "t5s4",
        subtitle: "Post-purchase conversion",
        link: "/post-purchase-conversion",
      },
      {
        subtitleId: "t5s5",
        subtitle: "Cart abandonment",
        link: "/cart-abandonment",
      },
      {
        subtitleId: "t5s6",
        subtitle: "Timer checkout",
        link: "/cart-abandonment",
      },
      {
        subtitleId: "t5s7",
        subtitle: "Sell on Social",
        link: '/sell-on-social"',
      },
      {
        subtitleId: "t5s8",
        subtitle: "Special Offer",
        link: "/special-offer",
      },
      {
        subtitleId: "t5s9",
        subtitle: "Seasonal Offer",
        link: "/seasonal-offer",
      },
    ],
    link: "/marketing",
    icon: <TargetIcon />,
  },
  {
    id: "t6",
    title: "Delivery Options",
    subtitles: [],
    link: "/delivery-options",
    icon: <LocalShippingOutlinedIcon />,
  },
  {
    id: "t7",
    title: "Payment Options",
    subtitles: [],
    link: "/payment-options",
    icon: <AttachMoneyOutlinedIcon />,
  },
  {
    id: "t8",
    title: "Store Design",
    subtitles: [],
    link: "/store-design",
    icon: <BrushIcon />,
  },
  {
    id: "t9",
    title: "Subscription",
    subtitles: [],
    link: "/subscription",
    icon: <CreditCardIcon />,
  },
  {
    id: "t10",
    title: "Integrations",
    subtitles: [],
    link: "/integrations",
    icon: <SettingsSuggestIcon />,
  },
  {
    id: "t11",
    title: "Extensions",
    subtitles: [],
    link: "/extensions",
    icon: <ExtensionIcon />,
  },
  {
    id: "t12",
    title: "Settings",
    subtitles: [],
    link: "/settings",
    icon: <SettingsIcon />,
  },
  {
    id: "t13",
    title: "Log out",
    subtitles: [],
    link: "/log-out",
    icon: <LogoutIcon />,
  },
];

export const secondaryMenuItems = [
  {
    id: "ta1",
    title: "Customer Support",
    link: "customer-support",
    icon: <HelpOutlineIcon />,
  },
  {
    id: "ta2",
    title: "Share your shop",
    link: "share-your-shop",
    icon: <ShareIcon />,
  },
  {
    id: "ta3",
    title: "View your shop",
    link: "view-your-shop",
    icon: <RemoveRedEyeOutlinedIcon />,
  },
];

export const dropdownMenuItems = [
  {
    id: "td1",
    title: "Fenoh Store",
  },
  {
    id: "td2",
    title: "Adidas Store",
  },
  {
    id: "td3",
    title: "Nike Store",
  },
  {
    id: "td4",
    title: "My Store",
  },
];
