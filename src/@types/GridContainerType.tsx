import React from "react";

interface GridContainerType {
  children: React.ReactNode;
  spacing?: string | number;
  direction?: string | undefined;
  columnSpacing?: string | number;
  styleProps?: React.CSSProperties;
  otherProps?: any;
}
// | {
//     padding?: string;
//     marginTop?: string;
//     flexDirection?: string;
//     justifyContent?: string;
//     alignItems?: string;
//     margin?: string;
//   }
// |

export default GridContainerType;
