import React from "react";

import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LightningIcon from "../../assets/icons/LightningIcon";
import { SvgIcon } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { drawerActions, getDrawerWidth } from "../../store/slices/drawerSlice";
import {
  BACKGROUND_COLOR_WHITE,
  PRIMARY_COLOR_ACTIVE,
} from "../../data/constants";
import GridContainerHeader from "../../components/Grid/GridContainerHeader";
import GridItem from "../../components/Grid/GridItem";

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

const StyledIconButton = styled(IconButton)(({ open }) => {
  return {
    color: "inherit",
    display: open && "none",
    "&:hover svg": {
      fill: PRIMARY_COLOR_ACTIVE,
    },
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
          borderColor: "rgba(10, 37, 64, 0.24)",
        }}
      >
        <StyledIconButton
          onClick={handleDrawerOpen}
          open={open}
          aria-label="open drawer"
          edge="start"
        >
          <MenuIcon />
        </StyledIconButton>
        <GridContainerHeader>
          <GridItem>
            <Typography noWrap component="p">
              Dashboard
            </Typography>
          </GridItem>
          <GridItem sx={{ display: "flex" }} alignItems="center">
            {<SvgIcon component={LightningIcon} />}
            <Typography noWrap component="p" sx={{ pl: 1 }}>
              What's New (2)
            </Typography>
          </GridItem>
        </GridContainerHeader>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
