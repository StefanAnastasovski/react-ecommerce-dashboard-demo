import React, { useState } from "react";

import { FormControl } from "@mui/material";

import { CARD_DROPDOWN_PERIOD } from "../../../../data/dashboardConfig";

import SelectDropdown from "../../../../components/ui/Select/SelectDropdown";
import {
  CARD_DROPDOWN_COLOR_TEXT,
  MENU_FONT_SIZE,
} from "../../../../data/constants";

const CardHeaderDropdown = () => {
  const [dropdownItem, setDropdownItem] = useState(
    CARD_DROPDOWN_PERIOD[0].title
  );

  const handleChange = (event) => {
    setDropdownItem(event.target.value);
  };

  return (
    <>
      <FormControl sx={{ m: 0, minWidth: 120 }}>
        <SelectDropdown
          selectId="select-period"
          hasOutline={false}
          selectStyle={{
            color: CARD_DROPDOWN_COLOR_TEXT,
            fontSize: MENU_FONT_SIZE,
          }}
          labelContent={{
            labelText: "",
            labelId: "",
            style: {
              sx: {},
            },
          }}
          dropdownItem={dropdownItem}
          dropdownMenuItems={CARD_DROPDOWN_PERIOD}
          changeHandler={handleChange}
        />
      </FormControl>
    </>
  );
};

export default CardHeaderDropdown;
