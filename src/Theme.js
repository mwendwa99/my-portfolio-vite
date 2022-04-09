import { createTheme } from "@mui/material/styles";
import { teal, blue, indigo, grey, red, blueGrey } from "@mui/material/colors";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: teal[300],
            contrastText: teal[900],
          },
          divider: teal[700],
          text: {
            primary: teal[900],
            secondary: teal[800],
          },
          background: {
            default: teal[200],
            paper: teal[200],
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: indigo[900],
            contrastText: indigo[100],
          },
          divider: indigo[200],
          background: {
            default: indigo[900],
            paper: indigo[900],
          },
          text: {
            primary: indigo[50],
            secondary: indigo[100],
          },
        }),
  },
});

const darkMode = createTheme(getDesignTokens("dark"));
const lightMode = createTheme(getDesignTokens("light"));

export { darkMode, lightMode };
