import { createSlice } from "@reduxjs/toolkit";
import { app, authProvider } from "../../utils/firebase-config";
import { getAuth, signInWithPopup, signOut } from "firebase/auth";

const auth = getAuth(app);

const initialState = {
  user: {},
  isSignedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userSignIn: (state) => {
      signInWithPopup(auth, authProvider).then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        state.user = user;
      });
    },
    userSignOut: (state) => {
      signOut(auth).then(() => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        state.isSignedIn = false;
      });
    },
  },
});

export const { userSignIn, userSignOut } = userSlice.actions;
export default userSlice.reducer;
