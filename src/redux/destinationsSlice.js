import { createSlice } from "@reduxjs/toolkit";
import { getDestinations } from "./destinationsOperations";

const destinationsSlice = createSlice({
  name: "destinations",

  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getDestinations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getDestinations.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })

      .addCase(getDestinations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default destinationsSlice.reducer;