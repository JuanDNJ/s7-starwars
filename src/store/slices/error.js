import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
  name: "userSlice",
  initialState: {
    code: null,
  },
  reducers: {
    setErrorCode: (state, action) => {
      state.code = action.payload;
    },
  },
});

export const { setErrorCode } = errorSlice.actions;
export default errorSlice.reducer;
