import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import styled from "@emotion/styled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import {
  Collapse,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import {
  MENU_FONT_SIZE,
  PRIMARY_BACKGROUND_COLOR_ACTIVE,
  PRIMARY_COLOR_ACTIVE,
  SECONDARY_BACKGROUND_COLOR_ACTIVE,
  SECONDARY_COLOR_TEXT,
} from "../../../../../data/constants";
import { drawerActions } from "../../../slices/drawerSlice";
import NotificationEllipse from "../../../../../components/NotificationEllipse";
import { primaryMenuItems } from "../../../data/sidebarData";

const StyledListItem = styled(ListItem)(() => {
  return {
    padding: 0,
    display: "block",
    "& .MuiCollapse-root": {
      // background: SECONDARY_BACKGROUND_COLOR_ACTIVE,
      color: SECONDARY_COLOR_TEXT,
    },
    "&:hover > div:first-of-type": {
      borderLeft: `3px solid ${PRIMARY_COLOR_ACTIVE} `,
      background: PRIMARY_BACKGROUND_COLOR_ACTIVE,
    },
    "&.Mui-selected > div:first-of-type": {
      background: PRIMARY_BACKGROUND_COLOR_ACTIVE,
      borderLeft: `3px solid ${PRIMARY_COLOR_ACTIVE}`,
      color: SECONDARY_COLOR_TEXT,
    },
    "&.Mui-selected > div:first-of-type .MuiTypography-root, .MuiCollapse-root .Mui-selected  .MuiTypography-root ": {
      color: PRIMARY_COLOR_ACTIVE,
    },
    "&.Mui-selected svg:not(.target-icon)": {
      fill: PRIMARY_COLOR_ACTIVE,
    },
    "&.Mui-selected .target-icon": {
      stroke: PRIMARY_COLOR_ACTIVE,
    },
  };
});

const StyledListItemButton = styled(ListItemButton, {
  shouldForwardProp: (props) => props !== "open",
})(({ open }) => ({
  direction: "row",
  minHeight: 48,
  padding: "2.5 0 2.5 0",
  justifyContent: open ? "initial" : "center",
  "&:hover .MuiTypography-root": {
    color: PRIMARY_COLOR_ACTIVE,
  },
  "&:hover svg:not(.target-icon)": {
    fill: PRIMARY_COLOR_ACTIVE,
  },
  "&:hover .target-icon": {
    stroke: PRIMARY_COLOR_ACTIVE,
  },
}));

const StyledListItemIcon = styled(ListItemIcon, {
  shouldForwardProp: (props) => props !== "open",
})(({ open }) => ({
  minWidth: 0,
  marginRight: open ? "1rem" : "auto",
  justifyContent: "center",
}));

const StyledListItemText = styled(ListItemText, {
  shouldForwardProp: (props) => props !== "open",
})(({ open }) => ({
  fontSize: MENU_FONT_SIZE,
  opacity: open ? 1 : 0,
}));

const DrawerItem = ({
  data,
  selectItemHandler,
  styleProps,
  orders,
  ...otherProps
}) => {
  const { id, title, subtitles, icon, link } = data;

  const [pathName, setPathName] = useState(link || "/");
  const open = useSelector((state) => state.drawer.isDrawerOpened);
  const isExpanded = useSelector((state) => state.drawer.isExpanded);
  const selectedItem = useSelector((state) => state.drawer.selectedMenuItemId);
  const dispatch = useDispatch();

  let expandIcon = null;
  if (subtitles.length > 0) {
    expandIcon = isExpanded[id] ? (
      <ExpandLessIcon />
    ) : (
      <ExpandMoreIcon sx={{ display: open ? 0 : "none" }} />
    );
  }

  let newsIcon = null;
  if (orders) {
    newsIcon = (
      <NotificationEllipse backgroundColor={"#00C48C"}>
        {orders.length}
      </NotificationEllipse>
    );
  }

  const onClickMenuHandler = (id, isExpandable, subId) => {
    dispatch(
      drawerActions.setIsExpanded({ id: id, isExpandable: isExpandable })
    );
    dispatch(
      drawerActions.setSelectedMenuItem({
        id: id,
        subId: subId || null,
      })
    );
    dispatch(drawerActions.setDrawerUrl({ url: link }));
  };

  const submenuItems = subtitles.map(({ subtitleId, subtitle, link }) => {
    return (
      <Link
        key={subtitleId}
        component={RouterLink}
        to={pathName.concat(link)}
        sx={{ textDecoration: "none" }}
      >
        <ListItem disablePadding selected={selectedItem.subId === subtitleId}>
          <StyledListItemButton
            open={open}
            sx={{ pl: 4 }}
            onClick={() => onClickMenuHandler(id, false, subtitleId)}
          >
            {open && <StyledListItemText open={open} primary={subtitle} />}
          </StyledListItemButton>
        </ListItem>
      </Link>
    );
  });

  return (
    <>
      <Link
        component={RouterLink}
        to={pathName}
        sx={{ textDecoration: "none" }}
      >
        <StyledListItem
          {...styleProps}
          {...otherProps}
          selected={selectedItem.id === id}
        >
          <StyledListItemButton
            open={open}
            onClick={() => onClickMenuHandler(id, subtitles.length > 0)}
          >
            <StyledListItemIcon open={open}>{icon}</StyledListItemIcon>

            {open && <ListItemText primary={title} />}

            {expandIcon && open && expandIcon}
            {newsIcon && open && newsIcon}
          </StyledListItemButton>
          {/* {open && (
            <Collapse in={isExpanded[id]} timeout="auto" unmountOnExit>
              <List component="ul" disablePadding>
                {submenuItems}
              </List>
            </Collapse>
          )} */}
        </StyledListItem>
      </Link>
      {open && (
        <Collapse
          in={isExpanded[id]}
          timeout="auto"
          unmountOnExit
          sx={{ background: SECONDARY_BACKGROUND_COLOR_ACTIVE }}
        >
          <List component="ul" disablePadding>
            {submenuItems}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default DrawerItem;
