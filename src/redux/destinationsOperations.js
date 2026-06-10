import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDestinations } from "../services/api";

export const getDestinations = createAsyncThunk(
  "destinations/getAll",
  async (_, thunkAPI) => {
    try {
      return await fetchDestinations();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);