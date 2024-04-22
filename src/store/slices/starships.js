import { createSlice } from "@reduxjs/toolkit";
import { fetchGetStarShipsPage, fetchStarships } from "../tunks";

export const starShips = createSlice({
  name: "ships",
  initialState: {
    isLoading: false,
    error: null,
    ships: {
      count: 0,
      next: "",
      previous: "",
      results: [],
    },
    data: [],
  },
  reducers: {
    setStarships: (state, action) => action.payload,
  },
  extraReducers: (builder) => {
    // GET Initial Starships
    builder.addCase(fetchStarships.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchStarships.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.ships = action.payload;
      state.data = [...state.data, ...action.payload.results];
    });
    builder.addCase(fetchStarships.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
    // GET Next Page
    builder.addCase(fetchGetStarShipsPage.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchGetStarShipsPage.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;

      state.data = [...state.data, ...action.payload.results];
    });
    builder.addCase(fetchGetStarShipsPage.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});
export { fetchStarships };
export const { setStarships } = starShips.actions;
export default starShips.reducer;
