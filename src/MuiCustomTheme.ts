import { createTheme } from "@mui/material";

export const MuiTheme = createTheme({
  palette: {
    success: {
      main: "#00C48C",
      contrastText: "#fff",
    },
    text: {
      primary: "#233B53",
      secondary: "#103B66",
    },
  },
  mixins: {
    toolbar: {
      minHeight: 60,
    },
  },
  typography: {
    fontFamily: '"Noto Sans HK" , "Helevetica" , "Arial" , sans-serif ',
  },
});