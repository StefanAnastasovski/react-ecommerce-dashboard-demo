import React from "react";

import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { drawerActions } from "../../slices/drawerSlice";
import LogoImg from "../../../../assets/images/logo/vetrinalive-logo.png";
import { HOME_PAGE_PATH } from "../../../../data/constants";

import GridItem from "../../../../components/Grid/GridItem";
import StyledIconButton from "../../../../components/ui/Button/StyledIconButton";
import Image from "../../../../components/Image";
import GridContainer from "../../../../components/Grid/GridContainer";

const DrawerHeaderComponent = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const DrawerHeader = () => {
  const open = useSelector((state: any) => state.drawer.isDrawerOpened);

  const dispatch = useDispatch();
  const handleDrawerClose = () => {
    dispatch(drawerActions.setDrawerClose());
  };

  return (
    <DrawerHeaderComponent>
      {open && (
        <GridContainer
          styleProps={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "2",
          }}
        >
          <GridItem>
            <Link href={HOME_PAGE_PATH}>
              <Image source={LogoImg} alt="Vetrinalive Logo" />
            </Link>
          </GridItem>
          <GridItem>
            <StyledIconButton onClick={handleDrawerClose} styleProps={{}}>
              <MenuIcon />
            </StyledIconButton>
          </GridItem>
        </GridContainer>
      )}
    </DrawerHeaderComponent>
  );
};

export default DrawerHeader;
