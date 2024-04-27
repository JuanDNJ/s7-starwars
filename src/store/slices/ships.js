import { createSlice } from "@reduxjs/toolkit";
import { fetchGetStarShipsPage } from "../tunks";

export const shipsSlice = createSlice({
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
    // GET Next Page
    builder.addCase(fetchGetStarShipsPage.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchGetStarShipsPage.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.ships = action.payload;
      state.data = [...state.data, ...action.payload.results];
    });
    builder.addCase(fetchGetStarShipsPage.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});

export const { setStarships } = shipsSlice.actions;
export default shipsSlice.reducer;
