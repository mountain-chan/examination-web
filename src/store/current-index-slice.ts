import { createSlice } from "@reduxjs/toolkit";

const initIndex: number = 6;

const currentIndexSlice = createSlice({
  name: "currentIndex",
  initialState: initIndex,
  reducers: {
    updateCurrentIndex(state, action: { payload: number }) {
      const newIndex = action.payload;
      if (newIndex !== undefined) {
        state = newIndex;
      }
      return state;
    },
  },
});

export const currentIndexActions = currentIndexSlice.actions;

export default currentIndexSlice;
