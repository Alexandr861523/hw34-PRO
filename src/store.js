import { configureStore } from "@reduxjs/toolkit";

import hotelsReducer from "./redux/hotelsSlice";
import destinationsReducer from "./redux/destinationsSlice";

export const store = configureStore({
  reducer: {
    hotels: hotelsReducer,
    destinations: destinationsReducer,
  },
});