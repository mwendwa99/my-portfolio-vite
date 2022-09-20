import { createSlice } from "@reduxjs/toolkit";
import { about, whatido } from "../../utils/firebaseMethods";

const initialState = {
  about: {},
  whatido: {},
};

export const contentSlice = createSlice({
  name: "whatido",
  initialState,
  reducers: {
    getAbout: (state) => {
      state.about = about.data();
    },
    getWhatIDo: (state) => {
      state.whatido = whatido.data();
    },
    updateAbout: (state) => {},
    updateWhatIDo: (state) => {},
    deleteWhatIDo: (state) => {},
  },
});

export const { getAbout, getWhatIDo, updateUserDetails, deleteUserDetails } =
  contentSlice.actions;

export default contentSlice.reducer;
