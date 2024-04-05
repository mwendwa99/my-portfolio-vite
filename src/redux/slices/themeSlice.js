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
    dark: (state) => {
      state.mode = {
        typography: {
          fontFamily: "Courier Prime, monospace",
        },
        palette: {
          mode: "dark",
          primary: {
            main: "#00776C",
            contrastText: "#fafafa",
          },
          secondary: {
            main: "#00776C",
            contrastText: "#fafafa",
          },
          background: {
            default: "#00776C",
            paper: "#00776C",
          },
          button: {
            main: teal[50],
            contrastText: "#fafafa",
          },
          divider: "#fafafa",
          text: {
            primary: "#FAFAFA",
            secondary: grey["A200"],
          },
        },
      };
    },
  },
});

export const { light, dark } = themeSlice.actions;

export default themeSlice.reducer;
