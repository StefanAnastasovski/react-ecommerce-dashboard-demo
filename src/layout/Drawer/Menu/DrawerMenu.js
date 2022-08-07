import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import {
  Collapse,
  Divider,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
} from "@mui/material";

import {
  menuItems,
  menuAdditionalItems,
  menuDropdownItems,
} from "../../../data/sidebarData";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";

const StyledListItem = styled(ListItem)(() => ({
  padding: 0,
  display: "block",
}));

const StyledListItemButton = styled(ListItemButton)(({ open }) => ({
  flexDirection: "row",
  minHeight: 48,
  padding: "2.5 0 2.5 0",
  justifyContent: open ? "initial" : "center",
}));

const StyledListItemIcon = styled(ListItemIcon)(({ open }) => ({
  minWidth: 0,
  marginRight: open ? "1rem" : "auto",
  justifyContent: "center",
}));

const StyledListItemText = styled(ListItemText)(({ open }) => ({
  fontSize: "14px",
  opacity: open ? 1 : 0,
}));

const DrawerMenu = () => {
  const open = useSelector((state) => state.drawer.isDrawerOpened);
  const [age, setAge] = useState(menuDropdownItems[0].title);
  const [isExpanded, setIsExpanded] = useState({});

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const isExpandedHandler = (id) => {
    setIsExpanded((prevIsExpanded) => ({
      ...prevIsExpanded,
      [id]: !prevIsExpanded[id],
    }));
  };

  return (
    <>
      <List>
        {menuItems.map((item) => {
          const { id, title, subtitles, icon } = item;
          if (subtitles.length > 0) {
            return (
              <StyledListItem key={id} onClick={() => isExpandedHandler(id)}>
                <StyledListItemButton open={open}>
                  <StyledListItemIcon open={open}>{icon}</StyledListItemIcon>
                  <StyledListItemText open={open} primary={title} />
                  {isExpanded[id] ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon sx={{ display: open ? 0 : "none" }} />
                  )}
                </StyledListItemButton>
                <Collapse in={isExpanded[id]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {subtitles.map(({ subtitleId, subtitle }) => {
                      return (
                        <StyledListItemButton
                          key={subtitleId}
                          open={open}
                          sx={{ pl: 4 }}
                        >
                          {open && (
                            <StyledListItemText
                              open={open}
                              primary={subtitle}
                            />
                          )}
                        </StyledListItemButton>
                      );
                    })}
                  </List>
                </Collapse>
              </StyledListItem>
            );
          }
          return (
            <StyledListItem key={id} disablePadding sx={{ display: "block" }}>
              <StyledListItemButton open={open}>
                <StyledListItemIcon open={open}>{icon}</StyledListItemIcon>
                {open && <ListItemText primary={title} />}
              </StyledListItemButton>
            </StyledListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        {menuAdditionalItems.map((item) => {
          const { id, title, icon } = item;

          return (
            <StyledListItem key={id}>
              <StyledListItemButton open={open}>
                <StyledListItemIcon open={open}>{icon}</StyledListItemIcon>
                <StyledListItemText open={open} primary={title} />
              </StyledListItemButton>
            </StyledListItem>
          );
        })}
      </List>

      {open && (
        <FormControl sx={{ mx: 2, my: 4, minWidth: 120 }}>
          <InputLabel
            id="select-your-shop-label"
            sx={{ ml: -1.5, my: 2, position: "initial" }}
          >
            Select your shop
          </InputLabel>
          <Select
            labelId="select-your-shop-label"
            id="select-your-shop"
            value={age}
            onChange={handleChange}
            IconComponent={ExpandMoreIcon}
          >
            {menuDropdownItems.map((item) => {
              const { id, title } = item;
              return (
                <MenuItem key={id} value={title}>
                  {title}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      )}
    </>
  );
};

export default DrawerMenu;
