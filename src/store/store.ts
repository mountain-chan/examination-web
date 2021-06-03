import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-silce";
import currentIndexSlice from "./current-index-slice";
import questionsSlice from "./questions-silce";
import timerSlice from "./timer-silce";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    questions: questionsSlice.reducer,
    currentIndex: currentIndexSlice.reducer,
    timer: timerSlice.reducer,
  },
});

export default store;
