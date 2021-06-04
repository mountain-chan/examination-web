import { createSlice } from "@reduxjs/toolkit";
import { UserModel } from "../models";

const initUser: UserModel = {
  email: "",
  name: "",
  imageUrl: "",
  point: 0,
  timeSpend: 0,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initUser,
  reducers: {
    updateAuth(state, action: { payload: UserModel }) {
      const newUser = action.payload;
      state = newUser;
      return state;
    },
    updatePoint(state, action: { payload: number }) {
      const point = action.payload;
      state.point = point;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
