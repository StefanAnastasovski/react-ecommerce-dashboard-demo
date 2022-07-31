import React from "react";

import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LogoImg from "../../../assets/images/logo/vetrinalive-logo.png";
import { Grid } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { drawerActions } from "../../../store/slices/drawerSlice";

const DrawerHeaderComponent = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const DrawerHeader = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.drawer.isDrawerOpened);
  const handleDrawerClose = () => {
    dispatch(drawerActions.setDrawerClose());
  };

  return (
    <DrawerHeaderComponent>
      {open && (
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ my: 2, mx: 2 }}
        >
          <Grid item>
            <a href="/">
              <img src={LogoImg} alt="Vetrinalive Logo" />
            </a>
          </Grid>
          <Grid item>
            <IconButton onClick={handleDrawerClose}>{<MenuIcon />}</IconButton>
          </Grid>
        </Grid>
      )}
    </DrawerHeaderComponent>
  );
};

export default DrawerHeader;
