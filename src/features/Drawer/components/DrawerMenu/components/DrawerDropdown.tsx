import React from "react";

import { FormControl } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { dropdownMenuItems } from "../../../data/sidebarData";
import { drawerActions } from "../../../slices/drawerSlice";
import SelectDropdown from "../../../../../components/ui/Select/SelectDropdown";

const DrawerDropdown = () => {
  const open = useSelector((state: any) => state.drawer.isDrawerOpened);
  const dropdownItem = useSelector(
    (state: any) => state.drawer.selectedDropdownItem
  );

  const dispatch = useDispatch();

  const handleChange = (event: any) => {
    dispatch(
      drawerActions.setSelectedDropdownItem({ title: event.target.value })
    );
  };

  return (
    <>
      {open && (
        <FormControl sx={{ mx: 2, my: 4, minWidth: 120 }}>
          <SelectDropdown
            selectId="select-your-shop"
            hasOutline={true}
            labelContent={{
              labelText: "Select your shop",
              labelId: "select-your-shop-label",
              style: {
                labelStyleProps: {
                  marginLeft: "-0.9rem",
                  position: "initial",
                },
              },
            }}
            dropdownItem={dropdownItem}
            dropdownMenuItems={dropdownMenuItems}
            changeHandler={handleChange}
          />
        </FormControl>
      )}
    </>
  );
};

export default DrawerDropdown;
