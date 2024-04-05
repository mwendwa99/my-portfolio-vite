import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../../client";

const initialState = {
  loading: false,
  error: null,
  data: null,
};

export const getProjects = createAsyncThunk(
  "projects/getProjects",
  (_, { rejectWithValue }) => {
    try {
      const query = `*[_type == "projects"] | order(_createdAt desc){
        _id,
        title,
        description,
        summary,
        link,
        stack,
       images,
       year
      }`;
      const data = client.fetch(query);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProjects.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getProjects.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default projectSlice.reducer;
