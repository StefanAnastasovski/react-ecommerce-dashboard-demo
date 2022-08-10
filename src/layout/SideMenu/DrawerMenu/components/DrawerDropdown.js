import React from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { dropdownMenuItems } from "../../../../data/sidebarData";
import { drawerActions } from "../../../../store/slices/drawerSlice";

const DrawerDropdown = () => {
  const open = useSelector((state) => state.drawer.isDrawerOpened);
  const dropdownItem = useSelector(
    (state) => state.drawer.selectedDropdownItem
  );

  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(
      drawerActions.setSelectedDropdownItem({ title: event.target.value })
    );
  };

  const dropdownItems = dropdownMenuItems.map((item) => {
    const { id, title } = item;
    return (
      <MenuItem key={id} value={title}>
        {title}
      </MenuItem>
    );
  });

  return (
    <>
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
            value={dropdownItem}
            onChange={handleChange}
            IconComponent={ExpandMoreIcon}
          >
            {dropdownItems}
          </Select>
        </FormControl>
      )}
    </>
  );
};

export default DrawerDropdown;
