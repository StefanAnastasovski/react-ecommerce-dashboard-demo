import React from "react";
import styled from "@emotion/styled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { useSelector } from "react-redux";
import {
  MENU_FONT_SIZE,
  PRIMARY_BACKGROUND_COLOR_ACTIVE,
  PRIMARY_COLOR_ACTIVE,
  SECONDARY_BACKGROUND_COLOR_ACTIVE,
  SECONDARY_COLOR_TEXT,
} from "../../../../data/constants";

const StyledListItem = styled(ListItem)(() => ({
  padding: 0,
  display: "block",
  "& .MuiCollapse-root": {
    background: SECONDARY_BACKGROUND_COLOR_ACTIVE,
    color: SECONDARY_COLOR_TEXT,
  },
  "&:hover > div:first-of-type": {
    borderLeft: `3px solid ${PRIMARY_COLOR_ACTIVE} `,
    background: PRIMARY_BACKGROUND_COLOR_ACTIVE,
  },
}));

const StyledListItemButton = styled(ListItemButton)(({ open }) => ({
  flexDirection: "row",
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

const StyledListItemIcon = styled(ListItemIcon)(({ open }) => ({
  minWidth: 0,
  marginRight: open ? "1rem" : "auto",
  justifyContent: "center",
}));

const StyledListItemText = styled(ListItemText)(({ open }) => ({
  fontSize: MENU_FONT_SIZE,
  opacity: open ? 1 : 0,
}));

const DrawerItem = ({ isExpanded, data, styleProps, ...otherProps }) => {
  const open = useSelector((state) => state.drawer.isDrawerOpened);

  const { title, subtitles, icon } = data;

  let expandIcon = null;
  if (subtitles.length > 0) {
    expandIcon = isExpanded ? (
      <ExpandLessIcon />
    ) : (
      <ExpandMoreIcon sx={{ display: open ? 0 : "none" }} />
    );
  }

  return (
    <>
      <StyledListItem {...styleProps} {...otherProps}>
        <StyledListItemButton open={open}>
          <StyledListItemIcon open={open}>{icon}</StyledListItemIcon>

          {open && <ListItemText primary={title} />}

          {expandIcon && expandIcon}
        </StyledListItemButton>
        <Collapse in={isExpanded} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {subtitles.map(({ subtitleId, subtitle }) => {
              return (
                <StyledListItemButton
                  key={subtitleId}
                  open={open}
                  sx={{ pl: 4 }}
                >
                  {open && (
                    <StyledListItemText open={open} primary={subtitle} />
                  )}
                </StyledListItemButton>
              );
            })}
          </List>
        </Collapse>
      </StyledListItem>
    </>
  );
};

export default DrawerItem;
