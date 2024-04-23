import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    uid: "",
    name: "",
    email: "",
    isLogin: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.uid = action.payload.uid;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isLogin = action.payload.isLogin;
      console.log(state);
    },
  },
});
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
