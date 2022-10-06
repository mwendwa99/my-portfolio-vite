import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editable: false,
};

const adminSlice = createSlice({
  name: "edit",
  initialState,
  reducers: {
    edit: (state) => {
      state.editable = true;
    },
  },
});

export const { edit } = adminSlice.actions;
export default adminSlice.reducer;
