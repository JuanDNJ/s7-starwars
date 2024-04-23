import { createSlice } from "@reduxjs/toolkit";
import { newUser } from "../../utils";

export const userSlice = createSlice({
  name: "userSlice",
  initialState: { ...newUser },
  reducers: {
    setUser: (state, action) => {
      state.uid = action.payload.uid;
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.isLogin = action.payload.isLogin;
    },
  },
});
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
