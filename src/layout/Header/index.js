import React from "react";

import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import LightningIcon from "../../assets/icons/LightningIcon";
import { SvgIcon } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import {
  WHITE_COLOR,
  PRIMARY_BORDER_COLOR,
  FONT_WEIGHT_500,
  LINK_N_TEXT_FONT_SIZE,
  PRIMARY_RED_COLOR,
  HEADER_BUTTON_FONT_SIZE,
  DRAWER_WIDTH,
} from "../../data/constants";
import { mainNewsToday } from "../../data/mainNewsToday";

import GridItem from "../../components/Grid/GridItem";
import StyledIconButton from "../../components/ui/Button/StyledIconButton";
import Paragraph from "../../components/Typography/Paragraph";
import NotificationEllipse from "../../components/NotificationEllipse";
import { drawerActions } from "../../features/Drawer/slices/drawerSlice";
import GridContainer from "../../components/Grid/GridContainer";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => {
  return {
    background: WHITE_COLOR,
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: "255px",
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  };
});

const Header = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.drawer.isDrawerOpened);
  const handleDrawerOpen = () => {
    dispatch(drawerActions.setDrawerOpen());
  };

  const selectedMenuItemTitle = useSelector(
    (state) => state.drawer.selectedMenuItemTitle
  );

  const mainNewsValue = mainNewsToday.length;

  const showMenuIcon = (
    <>
      {!open && (
        <StyledIconButton
          onClick={handleDrawerOpen}
          aria-label="open drawer"
          edge="start"
        >
          <MenuIcon />
        </StyledIconButton>
      )}
    </>
  );

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar
        sx={{
          borderBottom: 1,
          borderColor: PRIMARY_BORDER_COLOR,
        }}
      >
        {showMenuIcon}

        <GridContainer
          sx={{
            direction: "row",
            justifyContent: "space-between",
            alignItems: "center",
            m: 2,
          }}
        >
          <GridItem>
            <Paragraph
              noWrap
              sx={{
                fontSize: LINK_N_TEXT_FONT_SIZE,
                fontWeight: FONT_WEIGHT_500,
              }}
            >
              {selectedMenuItemTitle}
            </Paragraph>
          </GridItem>

          <GridItem sx={{ display: "flex", alignItems: "center" }}>
            <SvgIcon component={LightningIcon} />
            <Paragraph noWrap sx={{ pl: 1, fontSize: HEADER_BUTTON_FONT_SIZE }}>
              What's New
            </Paragraph>
            <NotificationEllipse
              backgroundColor={PRIMARY_RED_COLOR}
              mt={-3}
              ml={-1}
            >
              {mainNewsValue}
            </NotificationEllipse>
          </GridItem>
        </GridContainer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
