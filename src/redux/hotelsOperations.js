import { createAsyncThunk } from "@reduxjs/toolkit";
import { searchHotels } from "../services/api";

export const getHotels = createAsyncThunk(
  "hotels/search",
  async (city) => {
    return await searchHotels(city);
  }
);