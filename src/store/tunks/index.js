import { createAsyncThunk } from "@reduxjs/toolkit";
import { STAR_WARS } from "../../utils";

export const fetchSearchStarships = createAsyncThunk(
  "starships/ships",
  async (search) => {
    try {
      const request = await fetch(`${STAR_WARS}starships/?search=${search}`);
      if (!request.ok) throw new Error("Couldn't get API from starships");
      const result = await request.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  }
);

export const fetchGetStarShipById = createAsyncThunk(
  "starship/ship",
  async (id) => {
    try {
      const request = await fetch(`${STAR_WARS}starships/${id}`);
      if (!request.ok) throw new Error("Couldn't get API from starships");
      const result = await request.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  }
);

export const fetchGetStarShipsPage = createAsyncThunk(
  "nextStarships/ships",
  async (page) => {
    try {
      const request = await fetch(`${STAR_WARS}starships/?page=${page}`);
      if (!request.ok) throw new Error("Couldn't get API from starships");
      const result = await request.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  }
);
