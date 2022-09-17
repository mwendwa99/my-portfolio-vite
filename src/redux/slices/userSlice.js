import { createSlice } from "@reduxjs/toolkit";
import { userDocument } from "../../utils/firebaseMethods";

const initialState = {
  title: "",
  subtitle: "",
  image: "",
  url: "",
  description: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserDetails: (state) => {
      if (userDocument.exists()) {
        console.log(`document exists, ${userDocument.data()}`);
        state.title += "exists";
      } else {
        state.title += "..loading";
        console.log(`better luck next time`);
      }
    },
    updateUserDetails: (state) => {},
    deleteUserDetails: (state) => {},
  },
});

export const { getUserDetails, updateUserDetails, deleteUserDetails } =
  userSlice.actions;

export default userSlice.reducer;
