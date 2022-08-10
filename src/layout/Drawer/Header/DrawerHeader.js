import React from "react";

import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import LogoImg from "../../../assets/images/logo/vetrinalive-logo.png";

import { useDispatch, useSelector } from "react-redux";
import { drawerActions } from "../../../store/slices/drawerSlice";

import GridContainerHeader from "../../../components/Grid/GridContainerHeader";
import GridItem from "../../../components/Grid/GridItem";
import StyledIconButton from "../../../components/ui/Button/StyledIconButton";

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
        <GridContainerHeader>
          <GridItem>
            <a href="/">
              <img src={LogoImg} alt="Vetrinalive Logo" />
            </a>
          </GridItem>
          <GridItem>
            <StyledIconButton
              onClick={handleDrawerClose}
              styleProps={{ style: null }}
            >
              <MenuIcon />
            </StyledIconButton>
          </GridItem>
        </GridContainerHeader>
      )}
    </DrawerHeaderComponent>
  );
};

export default DrawerHeader;
