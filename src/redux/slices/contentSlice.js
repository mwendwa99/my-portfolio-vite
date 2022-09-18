import { createSlice } from "@reduxjs/toolkit";
import { about, whatido } from "../../utils/firebaseMethods";

const initialState = {
  about: {},
  whatido: [],
};

export const contentSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getAbout: (state) => {
      state.about = about.data();
    },
    getWhatIDo: (state) => {
      state.whatido = whatido.data();
      console.log("whatido", whatido.data());
    },
    getProjects: (state) => {},
    updateAbout: (state) => {},
    updateWhatIDo: (state) => {},
    updateProjects: (state) => {},
    deleteWhatIDo: (state) => {},
    deleteProject: (state) => {},
  },
});

export const { getAbout, getWhatIDo, updateUserDetails, deleteUserDetails } =
  contentSlice.actions;

export default contentSlice.reducer;
