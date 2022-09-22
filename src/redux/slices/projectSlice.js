import { createSlice } from "@reduxjs/toolkit";
import { projects } from "../../utils/firebaseMethods";

const initialState = {
  data: {},
};

export const projectSlice = createSlice({
  name: "all",
  initialState,
  reducers: {
    getProjects: (state) => {
      const obj = {};
      projects.forEach((doc) => {
        obj[doc.id] = doc.data();
      });
      state.data = obj;
    },
  },
});

export const { getProjects } = projectSlice.actions;
export default projectSlice.reducer;
