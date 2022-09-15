import { counterSlice } from "../slices/counterSlice";

export const { increment, decrement, addByValue } = counterSlice.actions;

export default counterSlice.reducer;
