import { createTheme } from "@mui/material/styles";
import { teal, yellow, blue, cyan } from "@mui/material/colors";

const getDesignTokens = (mode) => ({
  typography: {
    fontFamily: "Courier Prime, monospace",
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: teal[200],
            contrastText: teal[900],
          },
          secondary:{
            main: teal[200],
            contrastText: teal[900],
          },
          background: {
            default: teal[100],
            paper: teal[200],
          },
          button: {
            main: teal[200],
            contrastText: teal[900],
          },
          divider: teal[900],
          text: {
            primary: teal[900],
            secondary: teal[500],
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: teal[900],
            contrastText: teal[100],
          },
          secondary:{
            main: teal[900],
            contrastText: teal[100],
          },
          background: {
            default: teal[800],
            paper: teal[900],
          },
          button: {
            main: teal[800],
            contrastText: yellow[500],
          },
          divider: teal[200],
          text: {
            primary: yellow[500],
            secondary: yellow[400],
          },
        }),
  },
});

const darkMode = createTheme(getDesignTokens("dark"));
const lightMode = createTheme(getDesignTokens("light"));

export { darkMode, lightMode };
