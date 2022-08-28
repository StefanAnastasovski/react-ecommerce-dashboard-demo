import React from "react";

interface SelectDropdownType {
  selectId?: string;
  hasOutline: boolean;
  labelContent: {
    labelText: string;
    labelId: string;
    style: {
      labelStyleProps?: any;
    };
  };
  dropdownItem?: string;
  dropdownMenuItems?: any;
  changeHandler?: (event: any) => void;
  selectStyle?: {
    color?: string;
    fontSize?: string;
  };
  styleProps?: React.CSSProperties;
}

export default SelectDropdownType;
