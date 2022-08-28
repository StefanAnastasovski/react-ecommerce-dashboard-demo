import React from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { InputLabel, MenuItem, Select } from "@mui/material";
import styled from "@emotion/styled";
import SelectDropdownType from "../../../@types/SelectDropDownType";
import {
  FONT_WEIGHT_500,
  HEADER_BUTTON_FONT_SIZE,
} from "../../../data/constants";

const SelectDropdown = ({
  selectId,
  hasOutline,
  labelContent,
  dropdownItem,
  dropdownMenuItems,
  changeHandler,
  selectStyle,
}: SelectDropdownType) => {
  const { color, fontSize } = selectStyle || {};
  const dropdownItems = dropdownMenuItems.map((item: any) => {
    const { id, title } = item;
    return (
      <MenuItem
        key={id}
        value={title}
        sx={{ color: color, fontSize: fontSize }}
      >
        {title}
      </MenuItem>
    );
  });

  const {
    labelId,
    labelText,
    style: { labelStyleProps },
  } = labelContent;
  const StyledSelect = hasOutline
    ? styled(
        Select,
        {}
      )(() => ({
        "& .MuiSvgIcon-root": {
          fill: color,
        },
      }))
    : styled(Select)(() => ({
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none ",
          outline: "none ",
        },
        "& .MuiSvgIcon-root": {
          fill: color,
        },
      }));

  const labelInput = labelText && (
    <InputLabel
      id={labelId}
      sx={{
        ...labelStyleProps,
      }}
    >
      {labelText}
    </InputLabel>
  );

  const selectDropdown = (
    <StyledSelect
      labelId={labelId}
      id={selectId}
      value={dropdownItem}
      onChange={changeHandler}
      IconComponent={ExpandMoreIcon}
      sx={{ color: `${color}`, fontSize: `${fontSize}` }}
    >
      {dropdownItems}
    </StyledSelect>
  );

  return (
    <>
      {labelInput}
      {selectDropdown}
    </>
  );
};

export default SelectDropdown;
