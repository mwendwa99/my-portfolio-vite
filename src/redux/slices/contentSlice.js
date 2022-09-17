import { createSlice } from "@reduxjs/toolkit";
import { about } from "../../utils/firebaseMethods";

const initialState = {
  data: {},
};

export const contentSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getAbout: (state) => {
      state.data = about.data();
    },
    updateAbout: (state) => {},
    getWhatIDo: (state) => {},
    updateWhatIDo: (state) => {},
    deleteWhatIDo: (state) => {},
  },
});

export const { getAbout, updateUserDetails, deleteUserDetails } =
  contentSlice.actions;

export default contentSlice.reducer;
