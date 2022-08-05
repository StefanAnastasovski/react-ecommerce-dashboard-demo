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

const DrawerMenu = () => {
  const open = useSelector((state) => state.drawer.isDrawerOpened);
  const [age, setAge] = useState(menuDropdownItems[0].title);
  const [isExpanded, setIsExpanded] = useState({});

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const isExpandedHandler = (id) => {
    console.log(id);
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
              <ListItem
                key={id}
                disablePadding
                sx={{ display: "block" }}
                onClick={() => isExpandedHandler(id)}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={title}
                    primaryTypographyProps={{ fontSize: 14 }}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                  {isExpanded[id] ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon sx={{ display: open ? 0 : "none" }} />
                  )}
                </ListItemButton>
                <Collapse in={isExpanded[id]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {subtitles.map(({ subtitleId, subtitle }) => {
                      return (
                        <ListItemButton key={subtitleId} sx={{ pl: 4 }}>
                          <ListItemText
                            primary={subtitle}
                            primaryTypographyProps={{ fontSize: 14 }}
                            sx={{ opacity: open ? 1 : 0 }}
                          />
                        </ListItemButton>
                      );
                    })}
                  </List>
                </Collapse>
              </ListItem>
            );
          }
          return (
            <ListItem key={id} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {icon}
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ fontSize: 14 }}
                  primary={title}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        {menuAdditionalItems.map((item) => {
          const { id, title, icon } = item;

          return (
            <ListItem key={id} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {icon}
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ fontSize: 14 }}
                  primary={title}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
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
