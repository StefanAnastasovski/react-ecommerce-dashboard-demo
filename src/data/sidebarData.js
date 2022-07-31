import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ModeStandbyOutlinedIcon from "@mui/icons-material/ModeStandbyOutlined";
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

export const menuItems = [
  {
    id: "t1",
    title: "Dashboard",
    subtitles: [],
    link: "/dashboard",
    icon: <HomeOutlinedIcon />,
  },
  {
    id: "t2",
    title: "Catalogue",
    subtitles: [],
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
        subtitle: "Discount codes",
        link: "/discount-codes",
      },
      {
        subtitle: "Exit intent",
        link: "/exit-intent",
      },
      {
        subtitle: "Checkout Features",
        link: "/checkout-features",
      },
      {
        subtitle: "Post-purchase conversion",
        link: "/post-purchase-conversion",
      },
      {
        subtitle: "Cart abandonment",
        link: "/cart-abandonment",
      },
      {
        subtitle: "Timer checkout",
        link: "/cart-abandonment",
      },
      {
        subtitle: "Sell on Social",
        link: '/sell-on-social"',
      },
      {
        subtitle: "Special Offer",
        link: "/special-offer",
      },
      {
        subtitle: "Seasonal Offer",
        link: "/seasonal-offer",
      },
    ],
    link: "/marketing",
    icon: <ModeStandbyOutlinedIcon />,
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

export const menuAdditionalItems = [
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

export const menuDropdownItems = [
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
