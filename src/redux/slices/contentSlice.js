import { createSlice } from "@reduxjs/toolkit";
import { about, whatido, cv } from "../../utils/firebaseMethods";

const initialState = {
  about: {},
  whatido: {},
  cv: {},
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
    getCv: (state) => {
      state.cv = cv.data();
    },
    updateAbout: (state) => {},
    updateWhatIDo: (state) => {},
    deleteWhatIDo: (state) => {},
  },
});

export const {
  getAbout,
  getWhatIDo,
  getCv,
  updateUserDetails,
  deleteUserDetails,
} = contentSlice.actions;

export default contentSlice.reducer;
