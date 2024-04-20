import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchStarships = createAsyncThunk("starships/ships", async () => {
  try {
    const request = await fetch("https://swapi.dev/api/starships/");
    if (!request.ok) throw new Error("Couldn't get API from starships");
    const result = await request.json();
    return result;
  } catch (error) {
    console.error(error);
  }
});
