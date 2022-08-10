import React from "react";

import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import LightningIcon from "../../assets/icons/LightningIcon";
import { SvgIcon } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { drawerActions, getDrawerWidth } from "../../store/slices/drawerSlice";
import {
  BACKGROUND_COLOR_WHITE,
  PRIMARY_BORDER_COLOR,
} from "../../data/constants";
import GridContainerHeader from "./components/GridContainerHeader";
import GridItem from "../../components/Grid/GridItem";
import StyledIconButton from "../../components/ui/Button/StyledIconButton";
import Paragraph from "../../components/Typography/Paragraph";

const DRAWER_WIDTH = getDrawerWidth();

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => {
  return {
    background: BACKGROUND_COLOR_WHITE,
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: DRAWER_WIDTH,
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

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar
        sx={{
          borderBottom: 1,
          borderColor: PRIMARY_BORDER_COLOR,
        }}
      >
        <StyledIconButton
          onClick={handleDrawerOpen}
          aria-label="open drawer"
          edge="start"
          styleProps={{
            style: { color: "inherit", display: open && "none" },
          }}
        >
          <MenuIcon />
        </StyledIconButton>

        <GridContainerHeader>
          <GridItem>
            <Paragraph noWrap>Dashboard</Paragraph>
          </GridItem>

          <GridItem sx={{ display: "flex" }} alignItems="center">
            <SvgIcon component={LightningIcon} />
            <Paragraph noWrap sx={{ pl: 1 }}>
              What's New (2)
            </Paragraph>
          </GridItem>
        </GridContainerHeader>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
