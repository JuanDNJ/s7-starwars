import { createSlice } from "@reduxjs/toolkit";
import { fetchGetStarShipById } from "../tunks";

export const shipSlice = createSlice({
  name: "starShip",
  initialState: {
    isLoading: false,
    error: null,
    data: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetStarShipById.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchGetStarShipById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.data = action.payload;
    });
    builder.addCase(fetchGetStarShipById.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});

export default shipSlice.reducer;
