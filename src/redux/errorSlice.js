import { createSlice } from "@reduxjs/toolkit";

const errorMassageSlice = createSlice({
  name: "errorMassage",
  initialState: { isErrorMassage: true },
  reducers: {
    setErrorMassage: (state, action) => {
      state.isErrorMassage = action.payload;
    },
  },
});

export const { setErrorMassage } = errorMassageSlice.actions;

export default errorMassageSlice.reducer;
