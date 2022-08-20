require("dotenv").config();

// active
export const PRIMARY_COLOR_ACTIVE = "#21B8F9";
export const PRIMARY_GREEN_COLOR_ACTIVE = "#00C48C";
export const SECONDARY_GREEN_COLOR_ACTIVE = "#00C48C";

// background
export const PRIMARY_BACKGROUND_COLOR_ACTIVE = "#F7F7F7";
export const SECONDARY_BACKGROUND_COLOR_ACTIVE = "#E9F8FE";
export const BACKGROUND_LINEAR_GRADIENT_AQUA =
  "linear-gradient(180deg, #21B8F9 0%, rgba(33, 184, 249, 0) 132.05%)";
export const CARD_BACKGROUND_COLOR_ORANGE = "#F3A35C";
export const TRUSTPILOT_BACKGROUND_COLOR = "#000032";

// text
export const PRIMARY_COLOR_TEXT = "#103B66";
export const SECONDARY_COLOR_TEXT = "#233B53";
export const CARD_DROPDOWN_COLOR_TEXT = "#666666";
export const CARD_ORDER_BODY_COLOR_TEXT = "#6C7C8C";
export const CARD_COMPLETED_TEXT = "#FFA26B";

// font-size
export const MENU_FONT_SIZE = "14px";
export const HEADER_BUTTON_FONT_SIZE = "15px";
export const LINK_N_TEXT_FONT_SIZE = "17px";
export const CARD_TITLE_FONT_SIZE_1 = "20px";
export const CARD_TITLE_FONT_SIZE_2 = "22px";
export const WELCOME_MESSAGE_FONT_SIZE = "34px";

// font-weight
export const FONT_WEIGHT_400 = "400";
export const FONT_WEIGHT_500 = "500";
export const FONT_WEIGHT_600 = "600";
export const FONT_WEIGHT_700 = "700";

// line-height
export const LINE_HEIGHT_MOBILE_CARD = "27px";

// border
export const PRIMARY_BORDER_COLOR = "rgba(10, 37, 64, 0.24)";

// colors
export const WHITE_COLOR = "#FFFFFF";
export const PRIMARY_RED_COLOR = "#F33451";

// Destinations
export const HOME_PAGE_PATH = "/";
export const WELCOME_SECTION_PATH = "app.vetrinalive.it/fenoh-store";

export const API_URL = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.REACT_APP_API_KEY}`;
