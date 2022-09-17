import { createSlice } from "@reduxjs/toolkit";
import { createTheme } from "@mui/material/styles";
import { teal, yellow, blue, cyan } from "@mui/material/colors";

const initialState = {
  mode: {
    palette: {
      // palette values for dark mode
      mode: "light",
    },
  },
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    light: (state) => {
      state.mode = {
        // palette values for dark mode
        palette: {
          mode: "light",
        },
      };
    },
    dark: (state) => {
      state.mode = {
        // palette values for dark mode
        palette: {
          mode: "dark",
        },
      };
    },
  },
});

export const { light, dark } = themeSlice.actions;

export default themeSlice.reducer;
