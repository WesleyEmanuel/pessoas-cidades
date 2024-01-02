import { createTheme } from "@mui/material";
import { blue, cyan, indigo, yellow } from "@mui/material/colors";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: indigo[700],
      dark: indigo[800],
      light: indigo[500],
      contrastText: "#ffffff",
    },
    secondary: {
      main: blue[500],
      dark: blue[400],
      light: blue[300],
      contrastText: "#ffffff",
    },
    background: {
      default: "#f7f6f3",
      paper: "#ffffff",
    },
  },
});
