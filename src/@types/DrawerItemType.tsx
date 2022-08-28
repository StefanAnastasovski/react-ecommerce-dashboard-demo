import React from "react";

interface DrawerItemDataType {
  id: number | string;
  title: string;
  icon: React.ReactNode;
  subtitles?: any;
  link?: string;
}

interface DrawerItemType {
  data: DrawerItemDataType;
  selectItemHandler?: any;
  styleProps?: React.CSSProperties;
  orders?: any;
  otherProps?: any;
}

export default DrawerItemType;
