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
      state.data = projects.forEach((doc) => {
        // const obj = {{doc.id, doc.data()}}
        // console.log(state.data.push());
        // state.data.push(doc.data());
      });
    },
  },
});

export const { getProjects } = projectSlice.actions;
export default projectSlice.reducer;
