import { createSlice } from "@reduxjs/toolkit";
import { teal, yellow, lightGreen } from "@mui/material/colors";

const initialState = {
  mode: {
    typography: {
      fontFamily: "Courier Prime, monospace",
    },
    palette: {
      // palette values for dark mode
      mode: "light",
      primary: {
        main: teal[200],
        contrastText: teal[900],
      },
      secondary: {
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
            primary: lightGreen[500],
            secondary: lightGreen[400],
          },
        },
      };
    },
    dark: (state) => {
      state.mode = {
        typography: {
          fontFamily: "Courier Prime, monospace",
        },
        // palette values for dark mode
        palette: {
          mode: "dark",
          primary: {
            main: teal[900],
            contrastText: teal[100],
          },
          secondary: {
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
        },
      };
    },
  },
});

export const { light, dark, admin } = themeSlice.actions;

export default themeSlice.reducer;
