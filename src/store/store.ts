import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-silce";
import currentIndexSlice from "./current-index-slice";
import questionsSlice from "./questions-silce";

const store = configureStore({
  reducer: { auth: authSlice.reducer, questions: questionsSlice.reducer, currentIndex: currentIndexSlice.reducer },
});

export default store;
