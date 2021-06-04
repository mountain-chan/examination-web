import { createSlice } from "@reduxjs/toolkit";
import { TimerModel } from "../models";

const initialTimer: TimerModel = {
  seconds: 1800,
  isFinished: false,
  isRunning: false,
};

const timerSlice = createSlice({
  name: "timer",
  initialState: initialTimer,
  reducers: {
    updateTime(state) {
      state.seconds = state.seconds - 1;
    },
    updateFinished(state, action: { payload: boolean }) {
      const isFinished = action.payload;
      state.isFinished = isFinished;
    },
    updateRunning(state, action: { payload: boolean }) {
      const isRunning = action.payload;
      state.isRunning = isRunning;
    },
  },
});

export const timerActions = timerSlice.actions;

export default timerSlice;
