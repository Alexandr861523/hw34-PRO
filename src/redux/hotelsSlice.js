import { createSlice } from "@reduxjs/toolkit";
import { getHotels } from "./hotelsOperations";

const hotelsSlice = createSlice({
  name: "hotels",

  initialState: {
    items: [],
    loading: false,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getHotels.pending, (state) => {
        state.loading = true;
      })

      .addCase(getHotels.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      });
  },
});

export default hotelsSlice.reducer;