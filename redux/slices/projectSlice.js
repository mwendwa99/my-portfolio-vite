import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "empty",
  description: "empty",
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    updateTitle: (state, action) => {
      state.title += action.payload;
    },
    updateDescription: (state, action) => {
      state.description = action.payload;
    },
  },
});

export const { updateTitle, updateDescription } = projectSlice.actions;
export default projectSlice.reducer;
