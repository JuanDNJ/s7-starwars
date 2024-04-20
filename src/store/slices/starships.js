import { createSlice } from "@reduxjs/toolkit";
import { fetchStarships } from "../tunks";

export const starShips = createSlice({
  name: "ships",
  initialState: {
    isLoading: false,
    error: null,
    ships: {},
  },
  reducers: {
    setStarships: (state, action) => action.payload,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStarships.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchStarships.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.ships = action.payload;
    });
    builder.addCase(fetchStarships.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});
export { fetchStarships };
export const { setStarships } = starShips.actions;
export default starShips.reducer;
