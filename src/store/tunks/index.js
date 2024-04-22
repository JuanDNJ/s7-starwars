import { createAsyncThunk } from "@reduxjs/toolkit";
import { STAR_WARS } from "../../utils";
export const fetchStarships = createAsyncThunk("starships/ships", async () => {
  try {
    const request = await fetch(`${STAR_WARS}starships/`);
    if (!request.ok) throw new Error("Couldn't get API from starships");
    const result = await request.json();
    return result;
  } catch (error) {
    console.error(error);
  }
});
