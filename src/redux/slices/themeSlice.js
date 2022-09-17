import { createSlice } from "@reduxjs/toolkit";
import { darkMode, lightMode } from "../../Theme";

const initialState = {
  mode: lightMode,
  //   icon: <DarkModeTwoTone />,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    light: (state) => {
      state.mode = lightMode;
    },
    dark: (state) => {
      state.mode = darkMode;
    },
  },
});

export const { light, dark } = themeSlice.actions;

export default themeSlice.reducer;
