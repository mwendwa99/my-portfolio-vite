import { createSlice } from "@reduxjs/toolkit";
import { teal, grey } from "@mui/material/colors";

const initialState = {
  mode: {
    typography: {
      fontFamily: "Courier Prime, monospace",
    },
    palette: {
      // palette values for dark mode
      mode: "light",
      primary: {
        main: teal[50],
        contrastText: grey[900],
      },
      secondary: {
        main: teal[50],
        contrastText: grey[900],
      },
      background: {
        default: teal[50],
        paper: teal[50],
      },
      button: {
        main: teal[50],
        contrastText: grey[900],
      },
      divider: grey[900],
      text: {
        primary: grey[900],
        secondary: teal[200],
      },
    },
  },
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    light: (state) => initialState,
    admin: (state) => {
      state.mode = {
        palette: {
          mode: "dark",
          text: {
            primary: teal[200],
            secondary: teal[50],
          },
        },
      };
    },
    dark: (state) => {
      state.mode = {
        typography: {
          fontFamily: "Courier Prime, monospace",
        },
        palette: {
          mode: "dark",
          primary: {
            main: grey[900],
            contrastText: teal[50],
          },
          secondary: {
            main: grey[900],
            contrastText: teal[50],
          },
          background: {
            default: grey[800],
            paper: grey[900],
          },
          button: {
            main: grey[800],
            contrastText: teal[100],
          },
          divider: teal[50],
          text: {
            primary: grey["A100"],
            secondary: grey["A200"],
          },
        },
      };
    },
  },
});

export const { light, dark, admin } = themeSlice.actions;

export default themeSlice.reducer;
