import React from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { InputLabel, MenuItem, Select } from "@mui/material";
import styled from "@emotion/styled";

const SelectDropdown = ({
  selectId,
  hasOutline,
  labelContent,
  dropdownItem,
  dropdownMenuItems,
  changeHandler,
  selectStyle,
}) => {
  const { color, fontSize } = selectStyle || {};
  const dropdownItems = dropdownMenuItems.map((item) => {
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

  const { labelId, labelText, style: labelStyle } = labelContent || {};

  const StyledSelect = styled(Select, {
    shouldForwardProp: (props) => props !== "hasOutline",
  })(({ hasOutline }) => ({
    "& .MuiOutlinedInput-notchedOutline": {
      border: !hasOutline && "none ",
      outline: !hasOutline && "none ",
    },
    "& .MuiSvgIcon-root": {
      fill: color,
    },
  }));

  const labelInput = labelText && (
    <InputLabel id={labelId} {...labelStyle}>
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
      hasOutline={hasOutline}
      sx={{ color: color, fontSize: fontSize }}
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
