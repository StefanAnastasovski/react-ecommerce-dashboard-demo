import React from "react";

import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import BoltIcon from "../../assets/icons/BoltIcon";
import { Grid } from "@mui/material";
import { SvgIcon } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { drawerActions, getDrawerWidth } from "../../store/slices/drawerSlice";
import { PRIMARY_COLOR_ACTIVE } from "../../data/constants";

const DRAWER_WIDTH = getDrawerWidth();

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => {
  return {
    background: "#ffffff",
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
  console.log(open);

  return {
    color: "inherit",
    display: open && "none",
    "&:hover svg": {
      fill: PRIMARY_COLOR_ACTIVE,
    },
  };
});

// "&:hover .MuiButtonBase-root svg": {
//   fill: "#21B8F9",
// },
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
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ my: 2, mx: 2 }}
        >
          <Grid item>
            <Typography noWrap component="p">
              Dashboard
            </Typography>
          </Grid>
          <Grid item sx={{ display: "flex" }} alignItems="center">
            {<SvgIcon component={BoltIcon} />}
            <Typography noWrap component="p" sx={{ pl: 1 }}>
              What's New (2)
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
